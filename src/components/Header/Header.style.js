import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { MdOutlineClose, MdMenu } from 'react-icons/md';

export const HeaderWrapper = styled.header `
	width: 100%;
`;

export const Navigation = styled.nav `
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 20px 50px;

	@media(max-width: 530px) {
		flex-direction: column;
		padding: 10px 30px;
	}
`;

export const LogoLink = styled(Link)
`
	display: flex;
	flex-direction: row;
	text-decoration: none;
	align-items: center;
	color: #fff;
	font-family: 'Urbanist', sans-serif;
	font-weight: 500;
`;

export const Routes = styled.div `
	display: flex;
	flex-direction: row;
`;

export const RouteLink = styled(Link)
`
	display: flex;
	flex-direction: column;
	margin-right: 20px;
	text-decoration: none;
	color: #fff;
	font-family: 'Urbanist', sans-serif;
	font-weight: 500;
	align-items: center;

	@media(max-width: 530px) {
		flex-direction: row;
		width: 100%;
	}
`;

export const LogoImg = styled.img `
	width: 28px;
	height: 28px;
`;

export const RouteImg = styled.img `
	width: 44px;
	height: 44px;
`;

export const LinkText = styled.span `
	@media(max-width: 530px) {
		margin-left: 10px;
	}
`;

export const PreMenu = styled.div `
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const iconStyle = css `
	font-size: 3rem;
	color: #FFD914;
	user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;

	&:hover {
		cursor: pointer;
	}
`;

export const CloseIcon = styled(MdOutlineClose)
`
	${iconStyle};
`;

export const MenuIcon = styled(MdMenu)
`
	${iconStyle};
`;

export const Menu = styled.menu `
	list-style-type: none;
	padding-inline-start: 0;
`;

export const MenuItem = styled.li `
	margin-top: 10px;
	width: 100%;
	border: 1px solid #FFD914;
	border-radius: 15px;
	padding: 5px 10px;
`;