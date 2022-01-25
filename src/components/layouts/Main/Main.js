import React from 'react';
import styled from 'styled-components';

import RecipeType from '../../blocks/RecipeType/RecipeType';
import DishType from '../../blocks/DishType/DishType';
import Recipe from '../../blocks/Recipe/Recipe';
import Recipes from '../../blocks/Recipes/Recipes';

const StyledMain = styled.div``;

const Body = styled.div`
	display: flex;
`;

const Main = () => {
	return (
		<StyledMain>
			<div>
				<RecipeType/>
			</div>
			<Body>
				<DishType/>
				<Recipe/>
			</Body>
			<Recipes/>
		</StyledMain>
	);
};

export default Main;