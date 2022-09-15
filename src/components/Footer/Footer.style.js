import styled from 'styled-components';
import { BsTwitter } from 'react-icons/bs';

export const SectionWrapper = styled.footer `
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 100px;
	margin-bottom: 20px;

	@media(max-width: 650px) {
		margin-top: 50px;
		flex-direction: column;
		align-items: center;
	}
`;

export const TwitterIcon = styled(BsTwitter)
`
	font-size: 3rem;
	color: rgb(0,255,167);
`

export const LinkSection = styled.div `
	margin-left: 50px;

	@media(max-width: 650px) {
		margin-left: 0;
	}
`;

export const StyledLink = styled.a `
	text-decoration: none;
	color: #fff;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const JobTitle = styled.span `
	color: #fff;
	margin-left: 12px;
	font-size: 1.3rem;
	font-family: 'Urbanist',sans-serif;
`;