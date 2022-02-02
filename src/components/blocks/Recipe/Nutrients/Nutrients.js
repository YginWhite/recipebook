import React from 'react';
import { Button, ButtonWithoutBg } from '../../../common/Buttons/Buttons';
import Nutrient from './Nutrient/Nutrient';

import { StyledNutrients, Header, Composition, Buttons } from './Nutrients.styles';

const Nutrients = ({ nutrients }) => {
	return (
		<StyledNutrients className='recipe-nutrients'>
			<Header><h4>Nutritional Values</h4></Header>
			<Composition>
				{nutrients.map(nutrient => <Nutrient key={nutrient.name} { ...nutrient }/>)}
			</Composition>
			<Buttons>
				<Button>Recipe</Button>
				<ButtonWithoutBg>Add to favorites</ButtonWithoutBg>
			</Buttons>
		</StyledNutrients>
	);
};

export default Nutrients;