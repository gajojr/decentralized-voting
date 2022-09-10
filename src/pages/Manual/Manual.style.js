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
	justify-content: center;
`;

export const ProjectInfo = styled.p `
	font-family: 'Urbanist',sans-serif;
    font-size: 1.4rem;
	color: #fff;
	width: 800px;
	margin-top: 200px;
	border: 2px solid #00FFA7;
	border-radius: 20px;
	padding: 15px 25px;

	@media(max-width: 1000px) {
		width: 600px;
	}

	@media(max-width: 700px) {
		width: 450px;
		font-size: 1.2rem;
	}
	
	@media(max-width: 500px) {
		width: 350px;
		font-size: 1.1rem;
	}
`;