import styled from 'styled-components';

export const PageWrapper = styled.div `
	width: 100%;
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	background: radial-gradient(66.78% 71.49% at 114.42% -16.67%, #172923 0%, rgba(88, 31, 251, 0) 100%), radial-gradient(43% 75.44% at -11.92% 113.25%, #172923 0%, rgba(63, 4, 229, 0) 86.66%), radial-gradient(62.36% 62.36% at 61.67% 37.64%, #000 0%, #000 100%); 
	padding: 30px 40px;
`;

export const Main = styled.main `
	width: 100%;
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