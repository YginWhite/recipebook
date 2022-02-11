import React, { useState } from 'react';

import { StyledRecipeType, Item, Title } from './RecipeType.styles';


const RecipeType = () => {
	const types = ['All', 'Chiken', 'Fish', 'Fruits', 'Pasta', 'Pakistani', 'Chinese'];
	const [selected, setSelected] = useState('Chiken');

	const onItemClicked = (type) => setSelected(type);

	return (
		<nav>
			<StyledRecipeType>
				{types.map(type => (
					<Item key={type} onClick={(e) => onItemClicked(type)}>
						<Title selected={type === selected}>{type}</Title>
					</Item>
				))}
			</StyledRecipeType>
		</nav>
	);
};

export default RecipeType;