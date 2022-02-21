import React from 'react';
import Nutrient from './Nutrient/Nutrient';
import { StyledNutrients, Header, Items } from './Nutrients.styles';
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
		</StyledNutrients>
	);
};

export default Nutrients;