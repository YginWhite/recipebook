import React from 'react';

import RecipeType from '../../blocks/RecipeType/RecipeType';
import DishType from '../../blocks/DishType/DishType';
import Recipe from '../../blocks/Recipe/Recipe';
import Recipes from '../../blocks/Recipes/Recipes';

import { StyledMain, Header, Body } from './Main.styles';

const Main = () => {
	return (
		<StyledMain>
			<Header>
				<RecipeType/>
			</Header>

			<Body>
				<DishType/>
				<Recipe/>
			</Body>
			
			<Recipes/>
		</StyledMain>
	);
};

export default Main;