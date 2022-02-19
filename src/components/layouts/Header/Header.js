import React from 'react';
import { StyledHeader } from './Header.styles';
import Logo from '../../blocks/Logo/Logo';
import Nav from '../../blocks/Nav/Nav';

const Header = () => {
	return (
		<StyledHeader>
			<header>
				<Logo/>
				<Nav/>
			</header>
		</StyledHeader>
	);
};

export default Header;