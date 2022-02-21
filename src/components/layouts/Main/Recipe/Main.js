import React from 'react';
import { useSelector } from 'react-redux';
import { 
	selectRecipeSummary,
	selectRecipeImgSrc,
	selectRecipeIngredients,
	selectRecipeNutritionValues
} from '../../../../store/recipes/recipesSlice';
import { StyledMain } from './Main.styles';
import Summary from '../../../blocks/Summary/Summary';
import Image from '../../../blocks/Image/Image';
import Ingredients from '../../../blocks/Ingredients/Ingredients';
import Instructions from '../../../blocks/Instructions/Instructions';
import Nutrients from '../../../blocks/Nutrients/Nutrients'

const Main = () => {
	const summary = useSelector(selectRecipeSummary);
	const imageSrc = useSelector(selectRecipeImgSrc);
	const ingredients = useSelector(selectRecipeIngredients);
	const nutrients = useSelector(selectRecipeNutritionValues);

	return (
		<StyledMain>
			<Summary { ...summary }>
				<Image src={imageSrc} simple={true}/>
			</Summary>
			<Ingredients ingredients={ingredients}/>
			<Instructions/>
			<Nutrients nutrients={nutrients}/>
		</StyledMain>
	);
};

export default Main;

