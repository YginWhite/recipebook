import React from 'react';
import styled from 'styled-components';

import smallDish from '../../../../assets/images/small-dish.png';

const StyledRecipeSmall = styled.div`
	position: relative;
  padding-top: 32.37px;
`;

const Image = styled.div`
	position: absolute;
  left: 22.66px;
  bottom: 105px;
  height: 94.96px;
  width: 94.96px;
  box-shadow: 0px 1.75848px 4.39621px rgba(0, 0, 0, 0.15);
  border: 2px solid white;
  border-radius: 50px;
  overflow: hidden;

  img {
  	height: 94.96px;
  }
`;

const Content = styled.div`
	box-sizing: border-box;
  width: 142.44px;
  height: 160px;
  border: 0px solid #FFFFFF;
  border-width: 1.69px 1.97px;
  border-radius: 7.03px;
  box-shadow: 0px 1.75848px 4.39621px rgba(0, 0, 0, 0.15);

  & div:first-child {
  	margin-top: 69.06px;
  	font-family: 'Roboto', sans-serif;
  	font-size: 15.11px;
  	text-align: center;
  }

  & div:last-child {
  	margin-top: 9.71px;
  	font-family: 'Roboto', sans-serif;
  	font-size: 12.95px;
  	text-align: center;
  	color: #969696;
  }
`;

const RecipeSmall = ({ title, id, imageSrc, readyInMinutes, onClick }) => {
	const onRecipeClicked = (e) => onClick(id);

	return (
		<StyledRecipeSmall onClick={onRecipeClicked}>
			<Image>
				<img src={imageSrc} alt='small dish'/>
			</Image>
			<Content>
				<div>{title}</div>
				<div>{readyInMinutes} min cooktime</div>
			</Content>
		</StyledRecipeSmall>
	);
};

export default RecipeSmall;