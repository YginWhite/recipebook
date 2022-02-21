import React from 'react';
import { useSelector } from 'react-redux';
import { selectInstructions } from '../../../store/recipes/recipesSlice';
import { StyledInstructions, Header, Body } from './Instructions.styles';
import { HeadingFontStyle, SecondaryFontStyle } from '../../common/Fonts/Fonts.styled';

const Instructions = () => {
	const instructions = useSelector(selectInstructions);

	return (
		<StyledInstructions>
			<Header>
				<h4><HeadingFontStyle>Instructions</HeadingFontStyle></h4>
			</Header>
			<Body>
				<SecondaryFontStyle dangerouslySetInnerHTML={createMarkup(instructions)}></SecondaryFontStyle>
			</Body>
		</StyledInstructions>
	);
};

export default Instructions;

function createMarkup(text) {
  return {__html: text};
}