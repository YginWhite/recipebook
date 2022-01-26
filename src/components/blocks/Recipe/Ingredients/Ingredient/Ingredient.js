import React from 'react';
import styled from 'styled-components';

import image from '../../../../../assets/images/chicken.png';

const StyledIngredient = styled.div`
	width: 139.8px;
  display: flex;
`;

const Image = styled.figure`
	padding: 6.16px 11.59px 7.03px 11.38px;
  box-sizing: border-box;
  border-top: 0.51px solid white;
  border-bottom: 0.51px solid white;
  border-left: 0.68px solid white;
  border-right: 0.68px solid white;
  border-radius: 7.03px;
  box-shadow: 0px 1.75848px 4.39621px rgba(0, 0, 0, 0.15);

  img {
  	width: 26.42px;
  	height: 26.37px;
  }
`;

const Description = styled.div`
	margin: 6.5px 0 0 6px;

	& div:first-child {
		padding-top: 3px;
  	font-family: 'Roboto', sans-serif;
  	font-size: 10.55px;
  	font-weight: 500;
  	color: #404040;
	}

	& div:last-child {
		padding-top: 4px;
  	font-family: 'Roboto', sans-serif;
  	font-size: 8.12px;
  	color: #969696;
	}
`;

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