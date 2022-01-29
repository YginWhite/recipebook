import React from 'react';

import Ingredient from './Ingredient/Ingredient';

import { StyledIngredients, Header, Items, Buttons } from './Ingredients.styles';

const Ingredients = ({ ingredients }) => {
	return (
		<StyledIngredients className='recipe-ingredients'>
			<Header><h4>Ingredients</h4></Header>
			<Items>
				{ingredients.map(ingredient => <Ingredient key={ingredient.name} { ...ingredient }/>)}
			</Items>
			<Buttons>
				<button>View all ingredients</button>
			</Buttons>
		</StyledIngredients>
	);
};

export default Ingredients;