import React from 'react';
import smallDish from '../../../../assets/images/small-dish.png';

const RecipeSmall = ({ title, id, imageSrc, readyInMinutes }) => {
	return (
		<div className='recipe-small'>
			<div>
				<div className='image'>
					<img src={imageSrc} alt='small dish'/>
				</div>
				<div className='content'>
					<div>{title}</div>
					<div>{readyInMinutes} min cooktime</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeSmall;