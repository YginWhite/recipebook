import React from 'react';

import { StyledNutrient, Value, Name, Unit } from './Nutrient.styles';

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