import React from 'react';
import {
	HeaderWrapper,
	Navigation,
	LogoLink,
	LogoImg,
	RouteImg,
	LinkText,
	Routes,
	RouteLink
} from './Header.style';

const Header = () => {
	return (
		<HeaderWrapper>
			<Navigation>
				<LogoLink to="/">
					<LogoImg src="/images/chart.svg" alt="home link" />
					<LinkText style={{ marginLeft: 10 }}>Delect</LinkText>
				</LogoLink>
				<Routes>
					<RouteLink to="/" >
						<RouteImg src="/images/home.svg" alt="home link" />
						<LinkText>Home</LinkText>
					</RouteLink>
					<RouteLink to="/create-identity">
						<RouteImg src="/images/id.svg" alt="create id link" />
						<LinkText>Create ID</LinkText>
					</RouteLink>
					<RouteLink to="/manual">
						<RouteImg src="/images/manual.svg" alt="read manual" />
						<LinkText>Manual</LinkText>
					</RouteLink>
					<RouteLink to="/admin">
						<RouteImg src="/images/admin.svg" alt="admin page" />
						<LinkText>Admin</LinkText>
					</RouteLink>
				</Routes>
			</Navigation>
		</HeaderWrapper>
	);
}

export default Header;