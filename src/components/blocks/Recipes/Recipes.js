import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import RecipeSmall from './RecipeSmall/RecipeSmall';

import { StyledRecipes, Header, Items, Button } from './Recipes.styles';

import { 
	selectShortRecipesDescription,
	selectLastDisplayedRecipeInd,
	selectLoadedRecipesAmount,
	selectDispalyedRecipesAmount,

	currentRecipeIdIsSet,
	lastDisplayedRecipeIndIsSet,
	loadedRecipesAreOver
} from '../../../store/recipes/recipesSlice';

const Recipes = () => {
	const dispatch = useDispatch();

	const recipesDescription = useSelector(selectShortRecipesDescription);
	const lastDisplayedRecipeInd = useSelector(selectLastDisplayedRecipeInd);
	const loadedRecipesAmount = useSelector(selectLoadedRecipesAmount);
	const displayedRecipesAmount = useSelector(selectDispalyedRecipesAmount);

	const onRecipeClicked = (id) => dispatch(currentRecipeIdIsSet(id));

	const onRecipesBack = () => {
		let nextLastDisplayedRecipeInd = lastDisplayedRecipeInd - displayedRecipesAmount;
		if (nextLastDisplayedRecipeInd < displayedRecipesAmount - 1) {
			nextLastDisplayedRecipeInd = displayedRecipesAmount - 1;
		}
		dispatch(lastDisplayedRecipeIndIsSet(nextLastDisplayedRecipeInd));
	};

	const onRecipesForward = () => {
		let nextLastDisplayedRecipeInd = lastDisplayedRecipeInd + displayedRecipesAmount;
		if (nextLastDisplayedRecipeInd > loadedRecipesAmount - 1) {
			nextLastDisplayedRecipeInd = loadedRecipesAmount - 1;
		}

		if (nextLastDisplayedRecipeInd === lastDisplayedRecipeInd) {
			dispatch(loadedRecipesAreOver(true));
		} else {
			dispatch(lastDisplayedRecipeIndIsSet(nextLastDisplayedRecipeInd));
		}
		
	}

	return (
		<StyledRecipes className='recipes'>
			<Header><h3>More recipies</h3></Header>
			<div>
				<Button onClick={onRecipesBack}>❮</Button>
				<Items>
					{recipesDescription.map(item => <RecipeSmall key={item.id} { ...item } onClick={onRecipeClicked}/>)}
				</Items>
				<Button onClick={onRecipesForward}>❯</Button>
			</div>
			
		</StyledRecipes>
	);
};

export default Recipes;