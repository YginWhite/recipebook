import React from 'react';
import { useSelector } from 'react-redux';
import { StyledDishType, Item, Title, Flag } from './DishType.styles';
import { selectRecipeDishTypes } from '../../../store/recipes/recipesSlice';


const DishType = () => {
	const types = ['Breakfast', 'Lunch', 'Dinner'];
	const dishTypes = useSelector(selectRecipeDishTypes);

	return (
		<StyledDishType>
			{types.map(type => {
				const selected = dishTypes.includes(type.toLowerCase());
				return (
					<Item key={type}>
						<Title selected={selected}>{type}</Title>
						<Flag selected={selected}></Flag>
					</Item>
				);
			})}
		</StyledDishType>
	);
};

export default DishType;