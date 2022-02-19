import React from 'react';
import { useSelector } from 'react-redux';
import { selectRecipeSummary, selectRecipeImgSrc } from '../../../../store/recipes/recipesSlice';
import Summary from '../../../blocks/Summary/Summary';
import Image from '../../../blocks/Image/Image';
import { StyledMain } from './Main.styles';

const Main = () => {
	const summary = useSelector(state => selectRecipeSummary(state));
	const imageSrc = useSelector(selectRecipeImgSrc);

	return (
		<StyledMain>
			<Summary { ...summary }>
				<Image src={imageSrc} simple={true}/>
			</Summary>
		</StyledMain>
	);
};

export default Main;