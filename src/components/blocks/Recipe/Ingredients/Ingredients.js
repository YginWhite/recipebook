import React from 'react';
import Ingredient from './Ingredient/Ingredient';

const Ingredients = ({ ingredients }) => {
	return (
		<div className='ingredients'>
			<div className='header'>Ingredients</div>
			<div className='items'>
				{ingredients.map(ingredient => <Ingredient key={ingredient.name} { ...ingredient }/>)}
			</div>
			<div>
				<button className='button'>View all ingredients</button>
			</div>
		</div>
	);
};

export default Ingredients;