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

const Recipe = () => {
	const id = useSelector(selectCurrentRecipeId);
	const summary = useSelector(state => selectRecipeSummary(state, id));
	//const ingredients = useSelector(state => selectRecipeIngredients(state, id));
	//const nutrients = useSelector(state => selectRecipeNutritionValues(state, id));
	//const imageSrc = useSelector(state => selectRecipeImgSrc(state, id));

	summary.summary = utils.trimStringToLength(summary.summary, 289);

	return (
		<div className='recipe'>
			<div>
				<Summary { ...summary } />
				<Ingredients/>
				<Nutrients/>
				<Image/>
			</div>
		</div>
	);
};

export default Recipe;