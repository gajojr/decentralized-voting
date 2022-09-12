import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
	SectionWrapper,
	MintForm,
	FormCaption,
	NameInput,
	LastnameInput,
	CountryInput,
	CityInput,
	IDInput,
	BirthDateInput,
	MintBtn,
	WalletSection,
	Question,
	ConnectWalletBtn,
	Alert,
	AlertCaption,
	AlertText,
	AlertBtn,
	Spinner
} from './Form.style';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import web3 from '../../../web3/web3-provider';
import SBT from '../../../web3/contracts-js/SBT';

const ReactAlert = withReactContent(Swal);

const Form = () => {
	const authenticated = useSelector(state => state.auth.authenticated);
	const [creationPending, setCreationPending] = useState(false);

	const createIdentity = async (e) => {
		e.preventDefault();

		setCreationPending(true);

		if (!window.ethereum) {
			ReactAlert.fire({
				html: <Alert>
					<AlertCaption>Wallet notification</AlertCaption>
					<AlertText>No ethereum wallet installed!</AlertText>
					<AlertBtn onClick={ReactAlert.close}>OK</AlertBtn>
				</Alert>,
				showConfirmButton: false,
				background: '#152D25'
			});
			setCreationPending(false);

			return;
		}

		await window.ethereum.request({ method: 'eth_requestAccounts' });
		const accounts = await web3.eth.getAccounts();
		const hasId = await SBT.methods.walletOfOwner(accounts[0]).call();

		if (hasId.length) {
			ReactAlert.fire({
				html: <Alert>
					<AlertCaption>Wallet notification</AlertCaption>
					<AlertText>You have already created an id with this wallet</AlertText>
					<AlertBtn onClick={ReactAlert.close}>OK</AlertBtn>
				</Alert>,
				showConfirmButton: false,
				background: '#152D25'
			});
			setCreationPending(false);

			return;
		}

		const identificationNumber = e.target.idNumber.value;
		const name = e.target.name.value;
		const lastname = e.target.lastname.value;
		const country = e.target.country.value;
		const city = e.target.city.value;
		const dateOfBirth = e.target.dateOfBirth.value;

		const ageDifMs = Date.now() - new Date(dateOfBirth).getTime();
		const ageDate = new Date(ageDifMs);

		if (Math.abs(ageDate.getUTCFullYear() - 1970) < 18) {
			ReactAlert.fire({
				html: <Alert>
					<AlertCaption>Input notification</AlertCaption>
					<AlertText>You aren't allowed to have id, since you are underaged</AlertText>
					<AlertBtn onClick={ReactAlert.close}>OK</AlertBtn>
				</Alert>,
				showConfirmButton: false,
				background: '#152D25'
			});
			setCreationPending(false);

			return;
		}

		let gasAmount;
		try {
			gasAmount = await SBT.methods
				.mint(identificationNumber, name, lastname, country, city, dateOfBirth)
				.estimateGas({
					from: accounts[0]
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
			await SBT.methods
				.mint(identificationNumber, name, lastname, country, city, dateOfBirth)
				.send({
					from: accounts[0],
					gasLimit: String(gasAmount + 5000)
				});
		} catch (err) {
			console.log(err);
			ReactAlert.fire({
				html: <Alert>
					<AlertCaption>Wallet notification</AlertCaption>
					<AlertText>Failed to create identity, try again</AlertText>
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
			<MintForm onSubmit={createIdentity}>
				<FormCaption>Mint Your ID</FormCaption>
				<NameInput minLength="2" maxLength="20" />
				<LastnameInput minLength="2" maxLength="20" />
				<CountryInput minLength="2" maxLength="30" />
				<CityInput minLength="2" maxLength="30" />
				<IDInput minLength="4" maxLength="15" />
				<BirthDateInput />
				<MintBtn disabled={creationPending}>MINT</MintBtn>
				{
					creationPending && <Spinner />
				}
			</MintForm>
			{
				!authenticated &&
				<WalletSection>
					<Question>Already have decentralised id?</Question>
					<ConnectWalletBtn>Connect wallet</ConnectWalletBtn>
				</WalletSection>
			}
		</SectionWrapper>
	);
}

export default Form;