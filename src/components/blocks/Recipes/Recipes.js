import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import RecipeSmall from './RecipeSmall/RecipeSmall';
import { selectShortRecipesInfo, currentRecipeIdIsSet } from '../../../store/recipes/recipesSlice';

const StyledRecipes = styled.div`
	margin-left: 84.17px;
  margin-top: 23.74px;
  padding-bottom: 39.93px;
`;

const Header = styled.div`
	font-family: 'Arima Madurai', cursive;
  font-size: 23.98px;
  color: #404040;
`;

const Items = styled.div`
	display: flex;
  gap: 48.56px;
`;

const Recipes = () => {
	const dispatch = useDispatch();
	const recipesInfo = useSelector(selectShortRecipesInfo).slice(0, 5);

	const onRecipeClicked = (id) => dispatch(currentRecipeIdIsSet(id)); 

	return (
		<StyledRecipes>
			<Header>More recipies</Header>
			<Items>
				{recipesInfo.map(item => <RecipeSmall key={item.id} { ...item } onClick={onRecipeClicked}/>)}
			</Items>
		</StyledRecipes>
	);
};

export default Recipes;