import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.h1`
	padding: 19.19px 0 0 24.13px;
  font-family: 'Arima Madurai', cursive;
  font-size: 44.24px;
  line-height: 1;
`;

const Logo = () => {
	return (
		<StyledLogo>
			Delicacy
		</StyledLogo>
	);
};

export default Logo;