import React from 'react';
import smallDish from '../../../../assets/images/small-dish.png';

const RecipeSmall = () => {
	return (
		<div className='recipe-small'>
			<div>
				<div className='image'>
					<img src={smallDish} alt='small dish'/>
				</div>
				<div className='content'>
					<div>Beef Steak</div>
					<div>30 min cooktime</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeSmall;