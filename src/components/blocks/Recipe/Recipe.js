import React from 'react';
import Summary from './Summary/Summary';
import Ingredients from './Ingredients/Ingredients';
import Nutrients from './Nutrients/Nutrients';
import Image from './Image/Image';

const Recipe = () => {
	return (
		<div className='recipe'>
			<div>
				<Summary/>
				<Ingredients/>
				<Nutrients/>
				<Image/>
			</div>
		</div>
	);
};

export default Recipe;