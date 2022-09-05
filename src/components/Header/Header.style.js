import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header `
	width: 100%;
`;

export const Navigation = styled.nav `
	width: 80%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const LogoLink = styled(Link)
`
	display: flex;
	flex-direction: row;
`;

export const Routes = styled.div `
	display: flex;
	flex-direction: row;
`;

export const RouteLink = styled(Link)
`
	display: flex;
	flex-direction: column;
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