import React from 'react';

import image from '../../../../../assets/images/chicken.png';

import { StyledIngredient, Image, Description } from './Ingredient.styles';

const Ingredient = ({ name, original, imgSrc, imageName }) => {
	return (
		<StyledIngredient>
			<Image>
				<img src={imgSrc} alt={imageName}/>
			</Image>
			<Description>
				<header><h5>{name}</h5></header>
				<div>{original}</div>
			</Description>
		</StyledIngredient>
	);
};

export default Ingredient;