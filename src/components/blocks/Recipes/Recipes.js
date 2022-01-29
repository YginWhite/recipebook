import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import RecipeSmall from './RecipeSmall/RecipeSmall';
import { 
	selectShortRecipesDescription,
	selectLastDisplayedRecipeInd,
	selectLoadedRecipesAmount,
	selectDispalyedRecipesAmount,

	currentRecipeIdIsSet,
	lastDisplayedRecipeIndIsSet
} from '../../../store/recipes/recipesSlice';

const StyledRecipes = styled.section``;

const Header = styled.header`
  h3 {
  	margin: 0;
  	font-family: 'Arima Madurai', cursive;
  	font-style: normal;
		font-weight: 800;
		font-size: 23.9784px;
		line-height: 39px;
		color: #404040;
  }
`;

const Items = styled.div`
	display: flex;
  gap: 48.56px;
  align-items: center;
`;

const Button = styled.button`
	height: 50px;
	width: 50px;
	border: 0px solid #FFFFFF;
  border-width: 1.69px 1.97px;
  border-radius: 25px;
  box-shadow: 0px 1.75848px 4.39621px rgba(0, 0, 0, 0.15);
  background-color: inherit;
  cursor: pointer;
  color: #969696;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15.107px;
`;

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
		dispatch(lastDisplayedRecipeIndIsSet(nextLastDisplayedRecipeInd));
	}

	return (
		<StyledRecipes className='recipes'>
			<Header><h3>More recipies</h3></Header>
			<Items>
				<Button onClick={onRecipesBack}>❮</Button>

				{recipesDescription.map(item => <RecipeSmall key={item.id} { ...item } onClick={onRecipeClicked}/>)}

				<Button onClick={onRecipesForward}>❯</Button>
			</Items>
		</StyledRecipes>
	);
};

export default Recipes;