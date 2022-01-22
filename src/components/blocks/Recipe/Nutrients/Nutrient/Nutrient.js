import React from 'react';

const Nutrient = ({ name, amount, unit }) => {
	return (
		<div className='nutrient'>
			<div className='value'>{amount}</div>
			<div className='name'>{name}</div>
			<div className='unit'>{unit}</div>
		</div>
	);
};

export default Nutrient;