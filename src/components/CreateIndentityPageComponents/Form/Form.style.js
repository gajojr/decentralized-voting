import styled, { css } from 'styled-components';

export const SectionWrapper = styled.section `
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 180px;

	@media(max-width: 500px) {
		margin-top: 100px;
	}
`;

export const MintForm = styled.form `
	width: 600px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: rgba(2, 255, 168, 0.09);
	border: 6px solid #00FFA7;
	border-radius: 4px;

	@media(max-width: 640px) {
		width: 480px;
	}

	@media(max-width: 500px) {
		width: 400px;
	}

	@media(max-width: 420px) {
		width: 360px;
	}
`;

export const FormCaption = styled.h1 `
	font-family: 'Urbanist', sans-serif;
	font-size: 2.2rem;
	color: #fff;
`;

const textInputStyle = css `
	background: rgba(2, 255, 168, 0.09);
	border: 2px solid #00FFA7;
	border-radius: 4px; 
	color: #fff;
	padding: 10px 30px;
	padding-left: 5px;
	font-size: 1.2rem;
	font-family: 'Urbanist', sans-serif;
	text-shadow: 0px 2.41493px 4.82985px rgba(0, 0, 0, 0.6);
	outline: none;
	margin-bottom: 20px;

	@media(max-width: 420px) {
		padding: 7px 22px;
		padding-left: 5px;
		font-size: 1.1rem;
	}
`;

export const NameInput = styled.input.attrs({
    type: 'text',
    required: true,
    placeholder: 'First name',
    name: 'name'
})
`
	${textInputStyle};
`;

export const LastnameInput = styled.input.attrs({
    type: 'text',
    required: true,
    placeholder: 'Last name',
    name: 'lastname'
})
`
	${textInputStyle};
`;

export const CountryInput = styled.input.attrs({
    type: 'text',
    required: true,
    placeholder: 'Country',
    name: 'country'
})
`
	${textInputStyle};
`;

export const CityInput = styled.input.attrs({
    type: 'text',
    required: true,
    placeholder: 'City',
    name: 'city'
})
`
	${textInputStyle};
`;

export const IDInput = styled.input.attrs({
    type: 'text',
    required: true,
    placeholder: 'ID Number',
    name: 'idNumber'
})
`
	${textInputStyle};
`;

export const BirthDateInput = styled.input.attrs({
    type: 'date',
    required: true,
    name: 'dateOfBirth'
})
`
	margin-bottom: 20px;
	background: rgba(2, 255, 168, 0.09);
	border: 2px solid #00FFA7;
	color: #fff;
	padding: 10px 30px;
	font-size: 1.1rem;
`;

export const MintBtn = styled.button `
	background: #00FFA7;
	box-shadow: 0px 0px 15px rgba(2, 255, 168, 0.4);
	border-radius: 3px;
	border: none;
	color: #000;
	padding: 10px 25px;
	margin-bottom: 20px;
	font-size: 1.3rem;
	font-weight: 700;
	font-family: 'Urbanist', sans-serif;

	&:hover {
		cursor: pointer;
	}
`;

export const WalletSection = styled.section `
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Urbanist', sans-serif;
	color: #fff;
	margin-top: 30px;
`;

export const Question = styled.p `
	font-size: 1.2rem;
`;

export const ConnectWalletBtn = styled.button `
	background: #FFFFFF;
	box-shadow: 0px 1.47638px 5.90551px rgba(2, 255, 168, 0.09);
	border-radius: 5px;
	font-size: 1.3rem;
	font-weight: 600;
	outline: none;
	padding: 10px 30px;
	width: fit-content;
	margin-bottom: 50px;

	&:hover {
		cursor: pointer;
	}
`;

export const Alert = styled.div `
	background-color: #152D25;
	border-radius: 4px;
	color: #fff;
`;

export const AlertCaption = styled.h2 `

`;

export const AlertText = styled.p `
	
`;

export const AlertBtn = styled.button `
	background: #00FFA7;
	box-shadow: 0px 0px 15px rgba(2, 255, 168, 0.4);
	border-radius: 3px;
	border: none;
	color: #000;
	padding: 10px 25px;
	margin-bottom: 20px;
	font-size: 1.3rem;
	font-weight: 700;
	font-family: 'Urbanist', sans-serif;

	&:hover {
		cursor: pointer;
	}
`;

export const Spinner = styled.div `
	border: 13px solid #f3f3f3;
	border-top: 13px solid rgba(2, 255, 168, 0.4);
	border-radius: 50%;
	width: 100px;
	height: 100px;
	animation: spin 2s linear infinite;
	align-self: center;
	margin-bottom: 10px;

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
`;