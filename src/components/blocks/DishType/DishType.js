import React from 'react';
import { useSelector } from 'react-redux';

import { StyledDishType, Item } from './DishType.styles';

import { selectRecipeDishTypes } from '../../../store/recipes/recipesSlice';

const DishType = () => {
	const types = ['Breakfast', 'Lunch', 'Dinner'];

	const dishTypes = useSelector(selectRecipeDishTypes);

	return (
		<StyledDishType>
			{types.map(type => {
				let selected = false;
				if (dishTypes.includes(type.toLowerCase())) {
					selected = true;
				}
				return <Item key={type} selected={selected}><h2>{type}</h2></Item>;
			})}
		</StyledDishType>
	);
};

export default DishType;