import React from 'react';
import { useSelector } from 'react-redux';
import { 
	selectRecipeSummary,
	selectRecipeImgSrc,
	selectRecipeIngredients,
} from '../../../../store/recipes/recipesSlice';
import { StyledMain } from './Main.styles';
import Summary from '../../../blocks/Summary/Summary';
import Image from '../../../blocks/Image/Image';
import Ingredients from '../../../blocks/Ingredients/Ingredients';
import Instructions from '../../../blocks/Instructions/Instructions';

const Main = () => {
	const summary = useSelector(state => selectRecipeSummary(state));
	const imageSrc = useSelector(selectRecipeImgSrc);
	const ingredients = useSelector(state => selectRecipeIngredients(state));
	

	return (
		<StyledMain>
			<Summary { ...summary }>
				<Image src={imageSrc} simple={true}/>
			</Summary>
			<Ingredients ingredients={ingredients}/>
			<Instructions/>
		</StyledMain>
	);
};

export default Main;

