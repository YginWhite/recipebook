import React from 'react';

import RecipeType from '../../blocks/RecipeType/RecipeType';
import DishType from '../../blocks/DishType/DishType';
import Recipe from '../../blocks/Recipe/Recipe';
import Recipes from '../../blocks/Recipes/Recipes';

import { StyledMain, Header, FlexBody, Footer } from './Main.styles';

const Main = () => {
	return (
		<StyledMain>
			<Header>
				<RecipeType/>
			</Header>

			<FlexBody>
				<DishType/>
				<Recipe/>
			</FlexBody>
			
			<Footer>
				<Recipes/>
			</Footer>
		</StyledMain>
	);
};

export default Main;