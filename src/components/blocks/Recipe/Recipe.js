import React from 'react';
import Summary from './Summary/Summary';
import Ingredients from './Ingredients/Ingredients';
import Nutrients from './Nutrients/Nutrients';
import Image from './Image/Image';

const Recipe = () => {
	return (
		<div>
			Recipe
			<Summary/>
			<Ingredients/>
			<Nutrients/>
			<Image/>
		</div>
	);
};

export default Recipe;