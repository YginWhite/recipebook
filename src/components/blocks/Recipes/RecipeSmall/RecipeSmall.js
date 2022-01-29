import React from 'react';

import { StyledRecipeSmall, Image, Content } from './RecipeSmall.styles';

import smallDish from '../../../../assets/images/small-dish.png';

const RecipeSmall = ({ title, id, imageSrc, readyInMinutes, onClick }) => {
	const onRecipeClicked = (e) => onClick(id);

	return (
		<StyledRecipeSmall onClick={onRecipeClicked}>
			<Image>
				<img src={imageSrc} alt='small dish'/>
			</Image>
			<Content>
        <div>
          <header><h4>{title}</h4></header>
          <p>{readyInMinutes} min cooktime</p>
        </div>
			</Content>
		</StyledRecipeSmall>
	);
};

export default RecipeSmall;