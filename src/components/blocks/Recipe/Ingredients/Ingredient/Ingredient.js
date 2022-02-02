import React from 'react';

import image from '../../../../../assets/images/chicken.png';

import { StyledIngredient, Container, Img, Description, Header, Content } from './Ingredient.styles';

const Ingredient = ({ name, original, imgSrc, imageName }) => {
	return (
		<StyledIngredient>
			<Container>
				<Img src={imgSrc} alt={imageName}/>
			</Container>
			<Description>
				<header><Header>{name}</Header></header>
				<Content>{original}</Content>
			</Description>
		</StyledIngredient>
	);
};

export default Ingredient;