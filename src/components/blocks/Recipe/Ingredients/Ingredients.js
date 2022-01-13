import React from 'react';
import Ingredient from './Ingredient/Ingredient';

const Ingredients = () => {
	return (
		<div className='ingredients'>
			<div className='header'>Ingredients</div>
			<div className='items'>
				<Ingredient/>
				<Ingredient/>
				<Ingredient/>
				<Ingredient/>
			</div>
			<div>
				<button className='button'>View all ingredients</button>
			</div>
		</div>
	);
};

export default Ingredients;