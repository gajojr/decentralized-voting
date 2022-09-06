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
	MintBtn,
	WalletSection,
	Question,
	ConnectWalletBtn
} from './Form.style';

const Form = () => {
	return (
		<SectionWrapper>
			<MintForm>
				<FormCaption>Mint Your ID</FormCaption>
				<NameInput />
				<LastnameInput />
				<CountryInput />
				<CityInput />
				<IDInput />
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