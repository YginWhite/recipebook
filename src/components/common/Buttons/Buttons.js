import React from 'react';
import { StyledButton, StyledButtonWithoutBg } from './Buttons.styles';

export const Button = ({ children }) => {
	return <StyledButton>{children}</StyledButton>
};

export const ButtonWithoutBg = ({ children }) => {
	return <StyledButtonWithoutBg>{children}</StyledButtonWithoutBg>
};