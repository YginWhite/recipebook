import React from 'react';
import Nutrient from './Nutrient/Nutrient';

const Nutrients = ({ nutrients }) => {
	return (
		<div className='nutrients'>
			<div className='header'>Nutritional Values</div>
			<div className='composition'>
				{nutrients.map(nutrient => <Nutrient key={nutrient.name} { ...nutrient }/>)}
			</div>
			<div className='buttons'>
				<button className='button'>Recipe</button>
				<button className='button current'>Add to favorites</button>
			</div>
		</div>
	);
};

export default Nutrients;