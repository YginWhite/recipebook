import React from 'react';
import image from '../../../../../assets/images/chicken.png';

const Ingredient = () => {
	return (
		<div className='ingredient'>
			<div className='image'>
				<img src={image} alt='chiken'/>
			</div>
			<div className='description'>
				<div>Chicken</div>
				<div>1 Chicken Breast piece</div>
			</div>
		</div>
	);
};

export default Ingredient;