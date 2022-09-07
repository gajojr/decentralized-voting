import React from 'react';
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
	ConnectWalletBtn
} from './Form.style';

const Form = () => {
	const createIdentity = async (e) => {
		e.preventDefault();

		// console.log(e.target.name.value);
		// TODO: check if inputs are correct
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
				<MintBtn>MINT</MintBtn>
			</MintForm>
			<WalletSection>
				<Question>Already have decentralised id?</Question>
				<ConnectWalletBtn>Connect wallet</ConnectWalletBtn>
			</WalletSection>
		</SectionWrapper>
	);
}

export default Form;