import React from 'react';
import styled from 'styled-components';

const StyledNutrient = styled.div`
	width: 70.14px;
  height: 80.93px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  border: 0px solid #FFFFFF;
  border-width: 1.05px 0.97px;
  border-radius: 7.03px;
  box-shadow: 0px 1.75848px 4.39621px rgba(0, 0, 0, 0.15);
`;

const Value = styled.div`
	font-family: 'Roboto', sans-serif;
  font-size: 19.42px;
  font-weight: 500;
  color: #000000;
`;

const Name = styled.header`
  h5 {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 12.97px;
    font-weight: 500;
    color: #000000;
  }
`;

const Unit = styled.div`
	font-family: 'Roboto', sans-serif;
  font-size: 12.95px;
  font-weight: 500;
  color: #969696;
`;

const Nutrient = ({ name, amount, unit }) => {
	return (
		<StyledNutrient>
			<Value>{amount}</Value>
			<Name><h5>{name}</h5></Name>
			<Unit>{unit}</Unit>
		</StyledNutrient>
	);
};

export default Nutrient;