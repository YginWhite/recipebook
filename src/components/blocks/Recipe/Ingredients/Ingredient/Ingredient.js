import React from 'react';
import styled from 'styled-components';

import image from '../../../../../assets/images/chicken.png';

const StyledIngredient = styled.div`
	width: 139.8px;
	height: 39.57px;
  display: flex;
`;

const Image = styled.figure`
	box-sizing: border-box;
	width: 49.39px;
	margin: 0; 
	padding: 5.65px 10.91px 6.35px 10.87px;
	border-style: solid;
  border-width: 0.51px 0.68px;
  border-color: #FFFFFF;
  border-radius: 7.03px;
  box-shadow: 0px 1.75848px 4.39621px rgba(0, 0, 0, 0.15);

  img {
  	width: 26.42px;
  	height: 26.37px;
  }
`;

const Description = styled.div`
	padding-left: 6px;
	padding-top: 6px;

	h5 {
		margin: 0;
  	font-family: 'Roboto', sans-serif;
  	font-style: normal;
		font-weight: 500;
		font-size: 10.5509px;
		line-height: 12px;
		color: #404040;
	}

	& div:last-child {
		margin-top: 5px;
  	font-family: 'Roboto', sans-serif;
  	font-style: normal;
		font-weight: 500;
		font-size: 8.1242px;
		line-height: 10px;
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