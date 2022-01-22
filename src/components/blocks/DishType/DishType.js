import React from 'react';
import { useSelector } from 'react-redux';
import { selectRecipeDishTypes, selectCurrentRecipeId } from '../../../store/recipes/recipesSlice';

const DishType = () => {
	const types = ['Breakfast', 'Lunch', 'Dinner'];

	const id = useSelector(selectCurrentRecipeId);
	const dishTypes = useSelector(state => selectRecipeDishTypes(state, id));

	return (
		<ul className='dish-type'>
			{types.map(type => {
				let className = '';
				if (dishTypes.includes(type.toLowerCase())) {
					className = 'selected';
				}
				return <li key={type} className={className}>{type}</li>
			})}
		</ul>
	);
};

export default DishType;