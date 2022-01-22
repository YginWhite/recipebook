import React from 'react';
import dish from '../../../../assets/images/dish.png';

const Image = ({ src }) => {
	return (
		<div className='dish-image'>
			<img src={src} alt='dish'/>
		</div>
	);
};

export default Image;