import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.h1`
	height: 57.19px;
	margin: 0;
	padding: 0;
	font-family: Arima Madurai, cursive;
	font-style: normal;
	font-weight: 800;
	font-size: 44.2419px;
	line-height: 72px;
	color: #404040;
`;

const Logo = () => {
	return (
		<StyledLogo>
			Delicacy
		</StyledLogo>
	);
};

export default Logo;