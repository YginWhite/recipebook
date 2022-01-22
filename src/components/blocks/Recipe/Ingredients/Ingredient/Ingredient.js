import React from 'react';
import image from '../../../../../assets/images/chicken.png';

const Ingredient = ({ name, original, imgSrc, imageName }) => {
	return (
		<div className='ingredient'>
			<div className='image'>
				<img src={imgSrc} alt={imageName}/>
			</div>
			<div className='description'>
				<div>{name}</div>
				<div>{original}</div>
			</div>
		</div>
	);
};

export default Ingredient;