import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
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
	AlertBtn
} from './Form.style';
import Voting from '../../../web3/contracts-js/Voting';
import { store } from '../../../redux/store';

const ReactAlert = withReactContent(Swal);

const Form = () => {
	const [creationPending, setCreationPending] = useState(false);

	const addCandidate = async (e) => {
		e.preventDefault();

		setCreationPending(true);

		const name = e.target.name.value;
		const lastname = e.target.lastname.value;
		const quote = e.target.quote.value;

		let gasAmount;
		try {
			gasAmount = await Voting.methods
				.addCandidate(name, lastname, quote)
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
				.addCandidate(name, lastname, quote)
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
				<NameInput minLength="2" maxLength="20" />
				<LastnameInput minLength="2" maxLength="20" />
				<QuoteInput minLength="50" maxLegnth="500" />
				<MintBtn>ADD</MintBtn>
				{
					creationPending &&
					<Spinner />
				}
			</MintForm>
		</SectionWrapper>
	);
}

export default Form;