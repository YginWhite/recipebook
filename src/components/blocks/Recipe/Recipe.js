import React from 'react';
import { useSelector } from 'react-redux';
import { 
	selectCurrentRecipeId,
	selectRecipeSummary,
	selectRecipeIngredients,
	selectRecipeNutritionValues,
	selectRecipeImgSrc
} from '../../../store/recipes/recipesSlice';
import Summary from './Summary/Summary';
import Ingredients from './Ingredients/Ingredients';
import Nutrients from './Nutrients/Nutrients';
import Image from './Image/Image';
import { utils } from '../../../utils/utils';
import { recipesAPI } from '../../../services/api';


const Recipe = () => {
	const id = useSelector(selectCurrentRecipeId);
	const summary = useSelector(state => selectRecipeSummary(state, id));
	let ingredients = useSelector(state => selectRecipeIngredients(state, id));
	let nutrients = useSelector(state => selectRecipeNutritionValues(state, id));
	const imageSrc = useSelector(state => selectRecipeImgSrc(state, id));

	summary.summary = utils.trimStringToLength(summary.summary, 289);
	ingredients = prepareIngredients(ingredients);
	nutrients = prepareNutrients(nutrients);

	return (
		<div className='recipe'>
			<div>
				<Summary { ...summary } />
				<Ingredients ingredients={ingredients}/>
				<Nutrients nutrients={nutrients}/>
				<Image src={imageSrc}/>
			</div>
		</div>
	);
};

function prepareIngredients(ingredients) {
	return ingredients
		.map(item => ({ ...item, imgSrc: recipesAPI.createIngredientImageSrc(item.imageName) }))
		.slice(0, 4);
}

function prepareNutrients(nutrients) {
	return nutrients
		.filter(({ name }) => ['Calories', 'Fat', 'Carbohydrates', 'Protein'].includes(name))
		.map(nutrient => {
			const item = { ...nutrient,  amount: Math.round(nutrient.amount) };
			if (item.name === 'Carbohydrates') {
				return { ...item, name: 'Carbs' }
			}
			return item;
		});
}

export default Recipe;