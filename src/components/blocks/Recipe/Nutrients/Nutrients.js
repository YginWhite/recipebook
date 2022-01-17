import React from 'react';
import Nutrient from './Nutrient/Nutrient';

const Nutrients = () => {
	return (
		<div className='nutrients'>
			<div className='header'>Nutritional Values</div>
			<div className='composition'>
				<Nutrient/>
				<Nutrient/>
				<Nutrient/>
				<Nutrient/>
			</div>
			<div className='buttons'>
				<button className='button'>Recipe</button>
				<button className='button current'>Add to favorites</button>
			</div>
		</div>
	);
};

export default Nutrients;