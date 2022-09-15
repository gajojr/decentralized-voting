import styled from 'styled-components';

export const PageWrapper = styled.div `
	width: 100%;
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
`;

export const Main = styled.main `
	width: 100%;
	background-color: #000;
	display: flex;
	flex-direction: column;
	align-items: center;
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