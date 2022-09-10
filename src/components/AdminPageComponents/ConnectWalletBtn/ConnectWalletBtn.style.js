import styled, { css } from 'styled-components';

export const SectionWrapper = styled.section `
	display: flex;
	flex-direction: column;
	margin-top: 100px;

	@media(max-width: 580px) {
		width: 90%;
	}
`;

export const Info = styled.p `
	font-size: 1.1rem;
	font-weight: 500;
	font-family: 'Urbanist', sans-serif;
	color: #fff;
`;

const buttonStyle = css `
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

export const Btn = styled.button `
	${buttonStyle};
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
	${buttonStyle};
`;

export const Spinner = styled.div `
	border: 13px solid #f3f3f3;
	border-top: 13px solid rgba(2, 255, 168, 0.4);
	border-radius: 50%;
	width: 100px;
	height: 100px;
	animation: spin 2s linear infinite;
	align-self: center;

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
`;