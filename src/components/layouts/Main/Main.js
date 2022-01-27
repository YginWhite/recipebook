import React from 'react';
import styled from 'styled-components';

import RecipeType from '../../blocks/RecipeType/RecipeType';
import DishType from '../../blocks/DishType/DishType';
import Recipe from '../../blocks/Recipe/Recipe';
import Recipes from '../../blocks/Recipes/Recipes';

const StyledMain = styled.section`
	padding-top: 17.81px;

	.recipes {
		margin-top: 23.74px;
		margin-left: 59.35px;
	}
`;

const Header = styled.header`
	padding-left: 59.35px;
`;

const Body = styled.div`
	display: flex;
	align-items: center;
	padding-top: 19.97px;
	padding-left: 5.4px;
`;

const Main = () => {
	return (
		<StyledMain>
			<Header>
				<nav>
					<RecipeType/>
				</nav>
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