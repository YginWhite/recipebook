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
			<Item><h2>All</h2></Item>
			<Item selected={true}><h2>Chiken</h2></Item>
			<Item><h2>Fish</h2></Item>
			<Item><h2>Fruits</h2></Item>
			<Item><h2>Pasta</h2></Item>
			<Item><h2>Pakistani</h2></Item>
			<Item><h2>Chinese</h2></Item>
		</StyledRecipeType>
	);
};

export default RecipeType;