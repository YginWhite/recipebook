import React from 'react';
import { Button, ButtonWithoutBg } from '../../../common/Buttons/Buttons';
import Nutrient from './Nutrient/Nutrient';
import { StyledNutrients, Header, Items, Buttons } from './Nutrients.styles';
import { HeadingFontStyle } from '../../../common/Fonts/Fonts.styled';


const Nutrients = ({ nutrients }) => {
	return (
		<StyledNutrients>
			<Header>
				<h4><HeadingFontStyle>Nutritional Values</HeadingFontStyle></h4>
			</Header>
			<Items>
				{nutrients.map(nutrient => <Nutrient key={nutrient.name} { ...nutrient }/>)}
			</Items>
			<Buttons>
				<Button>Recipe</Button>
				<ButtonWithoutBg>Add to favorites</ButtonWithoutBg>
			</Buttons>
		</StyledNutrients>
	);
};

export default Nutrients;