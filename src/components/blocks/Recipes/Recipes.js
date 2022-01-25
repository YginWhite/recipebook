import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RecipeSmall from './RecipeSmall/RecipeSmall';
import { selectShortRecipesInfo, currentRecipeIdIsSet } from '../../../store/recipes/recipesSlice';

const Recipes = () => {
	const dispatch = useDispatch();
	const recipesInfo = useSelector(selectShortRecipesInfo).slice(0, 5);

	const onRecipeClicked = (id) => dispatch(currentRecipeIdIsSet(id)); 

	return (
		<div className='recipes'>
			<div className='header'>
				More recipies
			</div>
			<div className='content'>
				{recipesInfo.map(item => <RecipeSmall key={item.id} { ...item } onClick={onRecipeClicked}/>)}
			</div>
		</div>
	);
};

export default Recipes;