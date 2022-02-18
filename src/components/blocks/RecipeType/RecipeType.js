import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchQueryIsSet } from '../../../store/recipes/recipesSlice';
import { StyledRecipeType, Item, Title } from './RecipeType.styles';


const RecipeType = () => {
	const dispatch = useDispatch();
	const types = ['', 'Chiken', 'Fish', 'Fruits', 'Pasta', 'Pakistani', 'Chinese'];
	const [selected, setSelected] = useState('');

	const onItemClicked = (type) => {
		setSelected(type);
		dispatch(searchQueryIsSet(type));
	};

	return (
		<nav>
			<StyledRecipeType>
				{types.map(type => (
					<Item key={type} onClick={(e) => onItemClicked(type)}>
						<Title selected={type === selected}>{type || 'All'}</Title>
					</Item>
				))}
			</StyledRecipeType>
		</nav>
	);
};

export default RecipeType;