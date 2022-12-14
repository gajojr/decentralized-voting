import styled from 'styled-components';

export const SectionWrapper = styled.section `
	width: 50%;
	display: flex;
	flex-direction: column;
	color: #fff;

	@media(max-width: 1450px) {
		width: 60%;
	}

	@media(max-width: 1200px) {
		width: 70%;
	}

	@media(max-width: 950px) {
		width: 80%;
	}

	@media(max-width: 800px) {
		width: 94%;
	}
`;

export const List = styled.ul `
	width: 100%;
	list-style-type: none;
	display: flex;
	flex-direction: column;
	padding-inline-start: 0;
`;

export const CandidateCard = styled.li `
	display: flex;
	flex-direction: column;
	width: 100%;
	border: 4px solid #00FFA7;
	border-radius: 10px;
	padding: 10px;
	margin-bottom: 30px;
`;

export const UpperCardRow = styled.div `
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;

	@media(max-width: 570px) {
		align-items: center;
	}

	@media(max-width: 520px) {
		flex-direction: column;
	}
`;

export const ImageAndNumber = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const CandidateImg = styled.img `
	width: 200px;
	height: 200px;
	border-radius: 50%;

	@media(max-width: 750px) {
		width: 170px;
		height: 170px;
	}

	@media(max-width: 570px) {
		width: 150px;
		height: 150px;
	}
`;

export const CandidateNumber = styled.span `
	margin-top: 10px;
	font-family: 'Urbanist', sans-serif;
	font-size: 1.2rem;
`;

export const NameAndQuote = styled.div `
	margin-left: 20px;
	display: flex;
	flex-direction: column;

	@media(max-width: 420px) {
		margin-top: 10px;
	}
`;

export const CandidateName = styled.h2 `
	font-family: 'Urbanist', sans-serif;

	@media(max-width: 750px) {
		margin-block-start: 0;
		margin-block-end: 0;
	}
`;

export const CandidateQuote = styled.p `
	font-family: 'Urbanist', sans-serif;
	font-size: 1.1rem;

	@media(max-width: 660px) {
		font-size: .9rem;
	}
`;

export const DownRow = styled.div `
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	font-family: 'Urbanist', sans-serif;
	align-items: end;
`;

export const NumberOfVotes = styled.span `
	font-size: 1.1rem;
`;

export const VoteBtn = styled.button `
	background: linear-gradient(90.34deg, rgba(9, 132, 89, 0.9) 2.81%, rgba(0, 255, 167, 0.9) 120.48%);
	border-radius: 60px;
	font-family: 'Urbanist', sans-serif;
	font-size: 1.2rem;
	font-weight: 600;
	color: #fff;
	padding: 10px 40px;
	display: flex;
	flex-direction: row;

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
	border: 5px solid #f3f3f3;
	border-top: 5px solid rgba(2, 255, 168, 0.4);
	border-radius: 50%;
	width: 25px;
	height: 25px;
	animation: spin 2s linear infinite;
	align-self: center;
	margin-left: 15px;

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
`;

export const BigSpinner = styled.div `
	border: 15px solid #f3f3f3;
	border-top: 15px solid rgba(2, 255, 168, 0.4);
	border-radius: 50%;
	width: 200px;
	height: 200px;
	animation: spin 2s linear infinite;
	align-self: center;

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
`;