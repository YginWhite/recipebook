import React from 'react';
import RecipeSmall from './RecipeSmall/RecipeSmall';

const Recipes = () => {
	return (
		<div className='recipes'>
			<div className='header'>
				More recipies
			</div>
			<div className='content'>
				<RecipeSmall/>
				<RecipeSmall/>
				<RecipeSmall/>
				<RecipeSmall/>
				<RecipeSmall/>
			</div>
		</div>
	);
};

export default Recipes;