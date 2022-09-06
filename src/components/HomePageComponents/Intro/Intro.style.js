import styled from 'styled-components';

export const SectionWrapper = styled.section `
	width: 80%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	@media(max-width: 840px) {
		width: 94%;
	}

	@media(max-width: 720px) {
		flex-direction: column;
	}
`;

export const Caption = styled.h1 `
	font-family: 'Urbanist', sans-serif;
	font-size: 3rem;
	color: #fff;
	width: 40%;

	@media(max-width: 1110px) {
		width: 50%;
	}

	@media(max-width: 905px) {
		width: 60%;
	}

	@media(max-width: 720px) {
		width: 90%;
	}

	@media(max-width: 500px) {
		width: 96%;
	}

	@media(max-width: 420px) {
		font-size: 2.7rem;
	}
`;

export const LogoImg = styled.img `
	width: 520px;

	@media(max-width: 1450px) {
		width: 480px;
	}

	@media(max-width: 1250px) {
		width: 440px;
	}

	@media(max-width: 1110px) {
		width: 400px;
	}

	@media(max-width: 1000px) {
		width: 360px;
	}

	@media(max-width: 905px) {
		width: 310px;
	}
`;