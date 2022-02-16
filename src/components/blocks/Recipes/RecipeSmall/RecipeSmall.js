import React from 'react';

import {
	StyledRecipeSmall,
	ImageContainer,
	Image,
	DescriptionContainer,
	Description,
	Header,
	ReadyInMinutes
} from './RecipeSmall.styles';

import smallDish from '../../../../assets/images/small-dish.png';

const RecipeSmall = ({ title, id, imageSrc, readyInMinutes, onClick }) => {
	const onRecipeClicked = (e) => onClick(id);

	return (
		<StyledRecipeSmall onClick={onRecipeClicked}>
			<ImageContainer borderType='recipe_small_img' as='figure'>
				<Image src={imageSrc} alt='small dish'/>
			</ImageContainer>
			
			<DescriptionContainer borderType='recipe_small'>
				<Description>
					<Header><h4>{title}</h4></Header>
					<ReadyInMinutes>{readyInMinutes} min cooktime</ReadyInMinutes>
				</Description>
			</DescriptionContainer>
		</StyledRecipeSmall>
	);
};

export default RecipeSmall;