import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNav } from './Nav.styles';

const Nav = () => {
	return (
		<StyledNav>
			<NavLink to='/' style={({ isActive }) => ({ color: isActive ? '#404040' : '' })}>Home</NavLink>{' '}
			<NavLink to='/recipe' style={({ isActive }) => ({ color: isActive ? '#404040' : '' })}>Recipe</NavLink>
		</StyledNav>
	);
};

export default Nav;