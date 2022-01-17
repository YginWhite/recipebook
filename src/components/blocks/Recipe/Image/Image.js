import React from 'react';
import dish from '../../../../assets/images/dish.png';

const Image = () => {
	return (
		<div className='dish-image'>
			<img src={dish} alt='dish'/>
		</div>
	);
};

export default Image;