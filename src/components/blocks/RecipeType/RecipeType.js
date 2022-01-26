import React from 'react';
import styled from 'styled-components';

const StyledRecipeType = styled.ul`
	margin: 0;
	padding: 0;
	width: 623.7px;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.li`
  h2 {
  	margin: 0;
  	font-family: Roboto, sans-serif;
		font-style: normal;
		font-weight: 500;
		font-size: 17.5254px;
		line-height: 21px;
		color: ${props => props.selected ? '#404040' : '#969696'};
  }
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