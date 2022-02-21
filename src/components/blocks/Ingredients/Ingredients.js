import React from 'react';
import Ingredient from './Ingredient/Ingredient';
import { Button } from '../../common/Buttons/Buttons';
import { StyledIngredients, Header, Items, Buttons } from './Ingredients.styles';
import { HeadingFontStyle } from '../../common/Fonts/Fonts.styled';

const Ingredients = ({ ingredients, children }) => {
	return (
		<StyledIngredients>
			<Header>
				<h4><HeadingFontStyle>Ingredients</HeadingFontStyle></h4>
			</Header>
			<Items>
				{ingredients.map(ingredient => <Ingredient key={ingredient.name} { ...ingredient }/>)}
			</Items>
			{children && <Buttons>{children}</Buttons>}
			
		</StyledIngredients>
	);
};

export default Ingredients;