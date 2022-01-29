import React from 'react';

import Nutrient from './Nutrient/Nutrient';

import { StyledNutrients, Header, Composition, Buttons, Button, AddButton } from './Nutrients.styles';

const Nutrients = ({ nutrients }) => {
	return (
		<StyledNutrients className='recipe-nutrients'>
			<Header><h4>Nutritional Values</h4></Header>
			<Composition>
				{nutrients.map(nutrient => <Nutrient key={nutrient.name} { ...nutrient }/>)}
			</Composition>
			<Buttons>
				<Button>Recipe</Button>
				<AddButton>Add to favorites</AddButton>
			</Buttons>
		</StyledNutrients>
	);
};

export default Nutrients;