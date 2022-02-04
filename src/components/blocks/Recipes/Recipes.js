import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import RecipeSmall from './RecipeSmall/RecipeSmall';

import { StyledRecipes, Header, Items, Button } from './Recipes.styles';

import { 
	selectShortRecipesDescription,
	currentRecipeIdIsSet,
	goRecipesAhead,
	goRecipesBack
} from '../../../store/recipes/recipesSlice';

const Recipes = () => {
	const dispatch = useDispatch();
	const recipesDescription = useSelector(selectShortRecipesDescription);
	
	const onRecipeClicked = (id) => dispatch(currentRecipeIdIsSet(id));
	const onBack = () => dispatch(goRecipesBack());
	const onForward = () => dispatch(goRecipesAhead());

	return (
		<StyledRecipes className='recipes'>
			<Header><h3>More recipies</h3></Header>
			<div>
				<Button onClick={onBack}>❮</Button>
				<Items>
					{recipesDescription.map(item => <RecipeSmall key={item.id} { ...item } onClick={onRecipeClicked}/>)}
				</Items>
				<Button onClick={onForward}>❯</Button>
			</div>
			
		</StyledRecipes>
	);
};

export default Recipes;