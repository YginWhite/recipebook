import React from 'react';
import styled from 'styled-components';

import Ingredient from './Ingredient/Ingredient';

const StyledIngredients = styled.section`

`;

const Header = styled.header`
  h4 {
  	margin: 0;
  	font-family: 'Arima Madurai', cursive;
  	font-style: normal;
		font-weight: 800;
		font-size: 19.4233px;
		line-height: 32px;
		color: #969696;
  }
`;

const Items = styled.div`
	width: 291.55px;
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 14.95px;
`;

const Buttons = styled.div`
	margin-top: 16.68px;

	button {
		padding: 7.12px 27.94px 7.82px 26.88px;
  	border: none;
  	border-radius: 4.32px;
  	background-color: #408EBA;
  	font-family: 'Roboto', sans-serif;
  	font-size: 7.99px;
  	font-weight: 500;
  	color: #FFFFFF;
	}
`;

const Ingredients = ({ ingredients }) => {
	return (
		<StyledIngredients className='recipe-ingredients'>
			<Header><h4>Ingredients</h4></Header>
			<Items>
				{ingredients.map(ingredient => <Ingredient key={ingredient.name} { ...ingredient }/>)}
			</Items>
			<Buttons>
				<button>View all ingredients</button>
			</Buttons>
		</StyledIngredients>
	);
};

export default Ingredients;