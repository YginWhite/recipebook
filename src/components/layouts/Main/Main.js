import React from 'react';
import styled from 'styled-components';

import RecipeType from '../../blocks/RecipeType/RecipeType';
import DishType from '../../blocks/DishType/DishType';
import Recipe from '../../blocks/Recipe/Recipe';
import Recipes from '../../blocks/Recipes/Recipes';

const StyledMain = styled.section``;

const Body = styled.div`
	display: flex;
`;

const Main = () => {
	return (
		<StyledMain>
			<header>
				<nav>
					<RecipeType/>
				</nav>
			</header>

			<Body>
				<DishType/>
				<Recipe/>
			</Body>
			
			<Recipes/>
		</StyledMain>
	);
};

export default Main;