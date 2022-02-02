import React, { useState } from 'react';

import { StyledRecipeType, Item } from './RecipeType.styles';

const RecipeType = () => {
	const types = ['All', 'Chiken', 'Fish', 'Fruits', 'Pasta', 'Pakistani', 'Chinese'];
	const [selected, setSelected] = useState('Chiken');

	const onItemClicked = (type) => setSelected(type);

	return (
		<nav>
			<StyledRecipeType>
				{types.map(type => (
					<Item 
						key={type}
						selected={type === selected}
						onClick={(e) => onItemClicked(type)}
					>
						<h2>{type}</h2>
					</Item>
				))}
			</StyledRecipeType>
		</nav>
	);
};

export default RecipeType;