import React from 'react';
import RecipeType from '../../blocks/RecipeType/RecipeType';
import DishType from '../../blocks/DishType/DishType';
import Recipe from '../../blocks/Recipe/Recipe';
import Recipes from '../../blocks/Recipes/Recipes';

const Main = () => {
	return (
		<div className='main-layout'>
			<div>
				<RecipeType/>
			</div>
			<div className='flex'>
				<DishType/>
				<Recipe/>
			</div>
			<Recipes/>
		</div>
	);
};

export default Main;