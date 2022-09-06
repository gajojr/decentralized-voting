import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header `
	width: 100%;
`;

export const Navigation = styled.nav `
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 20px 50px;
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
`;