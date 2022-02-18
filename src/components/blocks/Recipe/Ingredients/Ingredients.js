import React from 'react';
import Ingredient from './Ingredient/Ingredient';
import { Button } from '../../../common/Buttons/Buttons';
import { StyledIngredients, Header, Items, Buttons } from './Ingredients.styles';
import { HeadingFontStyle } from '../../../common/Fonts/Fonts.styled';

const Ingredients = ({ ingredients }) => {
	return (
		<StyledIngredients>
			<Header>
				<h4><HeadingFontStyle>Ingredients</HeadingFontStyle></h4>
			</Header>
			<Items>
				{ingredients.map(ingredient => <Ingredient key={ingredient.name} { ...ingredient }/>)}
			</Items>
			<Buttons>
				<Button>View all ingredients</Button>
			</Buttons>
		</StyledIngredients>
	);
};

export default Ingredients;