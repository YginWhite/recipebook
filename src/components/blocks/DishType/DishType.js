import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { selectRecipeDishTypes, selectCurrentRecipeId } from '../../../store/recipes/recipesSlice';

const StyledDishType = styled.ul`
	display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 357.17px;
  width: 35.6px;
  margin-left: 25.21px;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
	writing-mode: vertical-lr;
  transform: scale(-1, -1);
  font-family: 'Roboto', sans-serif;
  font-size: 17.53px;
  color: ${props => props.selected ? '#404040' : '#969696'};

  &:before {
  	content: '';
  	display: block;
  	width: 9.71px;
  	height: 9.71px;
  	margin: auto 10px auto 0;
  	border-radius: 9.71px;
  	background-color: ${props => props.selected ? '#408EBA' : 'transparent'};
  }
`;

const DishType = () => {
	const types = ['Breakfast', 'Lunch', 'Dinner'];

	const id = useSelector(selectCurrentRecipeId);
	const dishTypes = useSelector(state => selectRecipeDishTypes(state, id));

	return (
		<StyledDishType>
			{types.map(type => {
				let selected = false;
				if (dishTypes.includes(type.toLowerCase())) {
					selected = true;
				}
				return <Item key={type} selected={selected}>{type}</Item>;
			})}
		</StyledDishType>
	);
};

export default DishType;