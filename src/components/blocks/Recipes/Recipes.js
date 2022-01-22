import React from 'react';
import { useSelector } from 'react-redux';
import RecipeSmall from './RecipeSmall/RecipeSmall';
import { selectShortRecipesInfo } from '../../../store/recipes/recipesSlice';

const Recipes = () => {
	const recipesInfo = useSelector(selectShortRecipesInfo).slice(0, 5);

	return (
		<div className='recipes'>
			<div className='header'>
				More recipies
			</div>
			<div className='content'>
				{recipesInfo.map(item => <RecipeSmall key={item.id} { ...item }/>)}
			</div>
		</div>
	);
};

export default Recipes;