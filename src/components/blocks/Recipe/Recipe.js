import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { 
	selectRecipeSummary,
	selectRecipeIngredients,
	selectRecipeNutritionValues,
	selectRecipeImgSrc
} from '../../../store/recipes/recipesSlice';
import Summary from './Summary/Summary';
import Ingredients from './Ingredients/Ingredients';
import Nutrients from './Nutrients/Nutrients';
import Image from './Image/Image';

const StyledRecipe = styled.article`
	box-sizing: border-box;
	position: relative;
  width: 623.7px;
  margin-left: 0;
  padding: 16.14px 11.42px 31.95px 11.42px;
  border-style: solid;
  border-width: 6.89px 8.63px;
  border-color: #FFFFFF;
  border-radius: 19.42px;
  box-shadow: 0px 2.15814px 5.39535px rgba(0, 0, 0, 0.15);

  section.recipe-ingredients {
  	margin-top: 18.34px;
  }

  section.recipe-nutrients {
  	margin-top: 16.68px;
  }
`;

const Recipe = () => {
	const summary = useSelector(state => selectRecipeSummary(state, 289));
	const ingredients = useSelector(state => selectRecipeIngredients(state, 4));
	const nutrients = useSelector(
		state => selectRecipeNutritionValues(state, ['Calories', 'Fat', 'Carbohydrates', 'Protein'])
	);
	const imageSrc = useSelector(selectRecipeImgSrc);

	return (
		<StyledRecipe>
			<Summary { ...summary } />
			<Ingredients ingredients={ingredients}/>
			<Nutrients nutrients={nutrients}/>
			<Image src={imageSrc}/>
		</StyledRecipe>
	);
};

export default Recipe;