import React from 'react';
import { useSelector } from 'react-redux';

import { 
	selectRecipeSummary,
	selectRecipeIngredients,
	selectRecipeNutritionValues,
	selectRecipeImgSrc
} from '../../../store/recipes/recipesSlice';

import Summary from '../Summary/Summary';
import Ingredients from '../Ingredients/Ingredients';
import Nutrients from './Nutrients/Nutrients';
import Image from '../Image/Image';
import { Button } from '../../common/Buttons/Buttons';

import { StyledRecipe } from './Recipe.styles';

const Recipe = () => {
	const summary = useSelector(state => selectRecipeSummary(state, 289));
	const ingredients = useSelector(state => selectRecipeIngredients(state, 4));
	const nutrients = useSelector(
		state => selectRecipeNutritionValues(state, ['Calories', 'Fat', 'Carbohydrates', 'Protein'])
	);
	const imageSrc = useSelector(selectRecipeImgSrc);

	return (
		<StyledRecipe borderType='recipe' as='article'>
			<Summary { ...summary } />
			<Image src={imageSrc}/>
			<Ingredients ingredients={ingredients}>
				<Button>View all ingredients</Button>
			</Ingredients>
			<Nutrients nutrients={nutrients}/>
		</StyledRecipe>
	);
};

export default Recipe;