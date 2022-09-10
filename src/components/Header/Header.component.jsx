import React, { useState } from 'react';
import {
	HeaderWrapper,
	Navigation,
	LogoLink,
	LogoImg,
	RouteImg,
	LinkText,
	Routes,
	RouteLink,
	PreMenu,
	CloseIcon,
	MenuIcon,
	Menu,
	MenuItem
} from './Header.style';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<HeaderWrapper>
			<Navigation>
				{
					window.innerWidth > 530 ?
						<>
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
						</> :
						<>
							<PreMenu>
								<LogoLink to="/">
									<LogoImg src="/images/chart.svg" alt="home link" />
									<LinkText style={{ marginLeft: 10 }}>Delect</LinkText>
								</LogoLink>
								{
									menuOpen ?
										<CloseIcon onClick={() => setMenuOpen(false)} /> :
										<MenuIcon onClick={() => setMenuOpen(true)} />
								}
							</PreMenu>
							{
								menuOpen &&
								<Menu>
									<MenuItem>
										<RouteLink to="/" >
											<RouteImg src="/images/home.svg" alt="home link" />
											<LinkText>Home</LinkText>
										</RouteLink>
									</MenuItem>
									<MenuItem>
										<RouteLink to="/create-identity">
											<RouteImg src="/images/id.svg" alt="create id link" />
											<LinkText>Create ID</LinkText>
										</RouteLink>
									</MenuItem>
									<MenuItem>
										<RouteLink to="/manual">
											<RouteImg src="/images/manual.svg" alt="read manual" />
											<LinkText>Manual</LinkText>
										</RouteLink>
									</MenuItem>
									<MenuItem>
										<RouteLink to="/admin">
											<RouteImg src="/images/admin.svg" alt="admin page" />
											<LinkText>Admin</LinkText>
										</RouteLink>
									</MenuItem>
								</Menu>
							}
						</>
				}
			</Navigation>
		</HeaderWrapper>
	);
}

export default Header;