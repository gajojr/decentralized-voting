import React, { useState } from 'react';
import { Buckets } from '@textile/hub';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { v4 as uuid } from 'uuid';
import {
	SectionWrapper,
	MintForm,
	FormCaption,
	NameInput,
	LastnameInput,
	MintBtn,
	QuoteInput,
	Spinner,
	Alert,
	AlertCaption,
	AlertText,
	AlertBtn,
	ImgUpload,
	ProfileImg,
	PlusIcon
} from './Form.style';
import Voting from '../../../web3/contracts-js/Voting';
import { store } from '../../../redux/store';

const ReactAlert = withReactContent(Swal);

const auth = {
	key: process.env.REACT_APP_TEXTILE_HUB_KEY
};
const buckets = Buckets.withUserAuth(auth);

const Form = () => {
	const [creationPending, setCreationPending] = useState(false);
	const [file, setFile] = useState('');
	const [fileInput, setFileInput] = useState();

	function selectFile() {
		const input = document.createElement('input');
		input.type = 'file';
		input.accept = '.jpg,.jfif,.png';
		input.onchange = () => {
			const files = Array.from(input.files);
			if (files[0].size > 2097152) {
				ReactAlert.fire({
					title: 'Upload info',
					html: <div>
						<p>File size can't be bigger than 2MB.</p>
					</div>,
				});

				return;
			}
			setFileInput(files[0]);
			console.log(files);

			const reader = new FileReader();
			reader.addEventListener('load', () => {
				const uploaded_image = reader.result;
				setFile(uploaded_image);
			});
			reader.readAsDataURL(files[0]);
		};
		input.click();
	}

	const addCandidate = async (e) => {
		e.preventDefault();

		setCreationPending(true);

		if (!file.length) {
			ReactAlert.fire({
				html: <Alert>
					<AlertCaption>Upload notification</AlertCaption>
					<AlertText>You must upload the image</AlertText>
					<AlertBtn onClick={ReactAlert.close}>OK</AlertBtn>
				</Alert>,
				showConfirmButton: false,
				background: '#152D25'
			});
			setCreationPending(false);

			return;
		}

		const chainId = window.ethereum.networkVersion;
		if (chainId !== "4") {
			ReactAlert.fire({
				html: <Alert>
					<AlertCaption>Wallet notification</AlertCaption>
					<AlertText>Switch network to rinkeby and try again</AlertText>
					<AlertBtn onClick={ReactAlert.close}>OK</AlertBtn>
				</Alert>,
				showConfirmButton: false,
				background: '#152D25'
			});
			setCreationPending(false);

			return;
		}

		let filename;
		try {
			const buckets = Buckets.withUserAuth(auth);
			const { root } = await buckets.getOrCreate('candidate-images');
			if (!root) throw new Error('bucket not created');
			const bucketKey = root.key;
			console.log(bucketKey);

			filename = `${uuid()}${fileInput.name}`;
			await buckets.pushPath(bucketKey, filename, fileInput);
		} catch (err) {
			console.log(err);
			ReactAlert.fire({
				html: <Alert>
					<AlertCaption>Upload notification</AlertCaption>
					<AlertText>Failed to upload image, try again</AlertText>
					<AlertBtn onClick={ReactAlert.close}>OK</AlertBtn>
				</Alert>,
				showConfirmButton: false,
				background: '#152D25'
			});
			setCreationPending(false);

			return;
		}

		const name = e.target.name.value;
		const lastname = e.target.lastname.value;
		const quote = e.target.quote.value;

		let gasAmount;
		try {
			gasAmount = await Voting.methods
				.addCandidate(name, lastname, quote, filename)
				.estimateGas({
					from: store.getState().auth.walletAddress
				});
		} catch (err) {
			console.log(err);
			ReactAlert.fire({
				html: <Alert>
					<AlertCaption>Wallet notification</AlertCaption>
					<AlertText>Failed to estimate gas for transaction, try again</AlertText>
					<AlertBtn onClick={ReactAlert.close}>OK</AlertBtn>
				</Alert>,
				showConfirmButton: false,
				background: '#152D25'
			});
			setCreationPending(false);

			return;
		}

		try {
			await Voting.methods
				.addCandidate(name, lastname, quote, filename)
				.send({
					from: store.getState().auth.walletAddress,
					gasLimit: String(gasAmount + 5000)
				});
		} catch (err) {
			console.log(err);
			ReactAlert.fire({
				html: <Alert>
					<AlertCaption>Wallet notification</AlertCaption>
					<AlertText>Failed to create candidate, try again</AlertText>
					<AlertBtn onClick={ReactAlert.close}>OK</AlertBtn>
				</Alert>,
				showConfirmButton: false,
				background: '#152D25'
			});
			setCreationPending(false);

			return;
		}

		setCreationPending(false);
	}

	return (
		<SectionWrapper>
			<MintForm onSubmit={addCandidate}>
				<FormCaption>Add candidate</FormCaption>
				<ImgUpload onClick={selectFile} uploaded={file.length > 0}>
					{
						file.length > 0 ?
							<ProfileImg src={file} /> :
							<PlusIcon />
					}
				</ImgUpload>
				<NameInput minLength="2" maxLength="20" />
				<LastnameInput minLength="2" maxLength="20" />
				<QuoteInput minLength="50" maxLegnth="500" />
				<MintBtn disabled={creationPending}>ADD</MintBtn>
				{
					creationPending &&
					<Spinner />
				}
			</MintForm>
		</SectionWrapper>
	);
}

export default Form;