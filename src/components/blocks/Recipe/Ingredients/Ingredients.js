import React from 'react';
import styled from 'styled-components';

import Ingredient from './Ingredient/Ingredient';

const StyledIngredients = styled.div`
	margin-left: 11.42px;
  margin-top: 18.34px;
`;

const Header = styled.div`
	font-family: 'Arima Madurai', cursive;
  font-size: 19.42px;
  color: #969696;
`;

const Item = styled.div`
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
		<StyledIngredients>
			<Header>Ingredients</Header>
			<Item>
				{ingredients.map(ingredient => <Ingredient key={ingredient.name} { ...ingredient }/>)}
			</Item>
			<Buttons>
				<button>View all ingredients</button>
			</Buttons>
		</StyledIngredients>
	);
};

export default Ingredients;