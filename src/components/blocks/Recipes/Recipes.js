import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import RecipeSmall from './RecipeSmall/RecipeSmall';
import { selectShortRecipesDescription, currentRecipeIdIsSet } from '../../../store/recipes/recipesSlice';

const StyledRecipes = styled.section`
	
`;

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
`;

const Recipes = () => {
	const dispatch = useDispatch();
	const recipesInfo = useSelector(state => selectShortRecipesDescription(state, 5));

	const onRecipeClicked = (id) => dispatch(currentRecipeIdIsSet(id)); 

	return (
		<StyledRecipes className='recipes'>
			<Header><h3>More recipies</h3></Header>
			<Items>
				{recipesInfo.map(item => <RecipeSmall key={item.id} { ...item } onClick={onRecipeClicked}/>)}
			</Items>
		</StyledRecipes>
	);
};

export default Recipes;