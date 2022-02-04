import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RecipeSmall from './RecipeSmall/RecipeSmall';
import Paginator from './Paginator/Paginator';
import { StyledRecipes, Header, Items } from './Recipes.styles';
import { selectShortRecipesDescription, currentRecipeIdIsSet } from '../../../store/recipes/recipesSlice';

const Recipes = () => {
	const dispatch = useDispatch();
	const recipesDescription = useSelector(selectShortRecipesDescription);
	
	const onRecipeClicked = (id) => dispatch(currentRecipeIdIsSet(id));

	return (
		<StyledRecipes className='recipes'>
			<Header><h3>More recipies</h3></Header>
			<div>
				<Paginator>
					<Items>
						{recipesDescription.map(item => <RecipeSmall key={item.id} { ...item } onClick={onRecipeClicked}/>)}
					</Items>
				</Paginator>
			</div>
			
		</StyledRecipes>
	);
};

export default Recipes;