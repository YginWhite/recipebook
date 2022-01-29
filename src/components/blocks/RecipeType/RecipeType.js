import React from 'react';

import { StyledRecipeType, Item } from './RecipeType.styles';

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