import React from 'react';
import styled from 'styled-components';

import Nutrient from './Nutrient/Nutrient';

const StyledNutrients = styled.section`
	margin-left: 11.42px;
  margin-top: 24.43px;
`;

const Header = styled.header`
	font-family: 'Arima Madurai', cursive;
  font-size: 19.42px;
  line-height: 1;
  color: #969696;
`;

const Composition = styled.div`
	margin: 16.19px 0 15.11px 0;
  display: flex;
  gap: 15.11px;
`;

const Buttons = styled.div`
	padding-bottom: 31.64px;
  display: flex;
  gap: 24.06px;
`;

const Button = styled.button`
	width: 124.86px;
  padding: 7.12px 0 7.82px 0;
  text-align: center;
  border: none;
  border-radius: 4.32px;
  background-color: #408EBA;
  font-family: 'Roboto', sans-serif;
  font-size: 7.99px;
  font-weight: 500;
  color: #FFFFFF;
`;

const AddButton = styled(Button)`
	border: 1.07907px solid #408EBA;
  background-color: transparent;
  color: #408EBA;
`;

const Nutrients = ({ nutrients }) => {
	return (
		<StyledNutrients>
			<Header><h4>Nutritional Values</h4></Header>
			<Composition>
				{nutrients.map(nutrient => <Nutrient key={nutrient.name} { ...nutrient }/>)}
			</Composition>
			<Buttons>
				<Button>Recipe</Button>
				<AddButton>Add to favorites</AddButton>
			</Buttons>
		</StyledNutrients>
	);
};

export default Nutrients;