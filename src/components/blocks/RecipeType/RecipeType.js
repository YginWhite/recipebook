import React from 'react';
import styled from 'styled-components';

const StyledRecipeType = styled.ul`
	width: 623.7px;
  margin: 17.81px 87.8px;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.li`
	font-family: 'Roboto', sans-serif;
  font-size: 17.53px;
  color: ${props => props.selected ? '#404040' : '#969696'}
`;

const RecipeType = () => {
	return (
		<StyledRecipeType>
			<Item>All</Item>
			<Item selected={true}>Chiken</Item>
			<Item>Fish</Item>
			<Item>Fruits</Item>
			<Item>Pasta</Item>
			<Item>Pakistani</Item>
			<Item>Chinese</Item>
		</StyledRecipeType>
	);
};

export default RecipeType;