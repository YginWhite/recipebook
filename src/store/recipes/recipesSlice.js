import { api } from '../../services/api';

const RECIPES_REQUESTED = 'recipes/recipesRequested';
const RECIPES_RECEIVED = 'recipes/recipesReceived';
const RECIPES_LOADED = 'recipes/recipesLoaded';
const RECIPES_CURRENT_RECIPE_ID_IS_SET = 'recipes/currentRecipeIdIsSet';


const initialState = {
	data: [],
	isLoading: false,
	currentRecipeId: null
};


export default function recipesReducer(state = initialState, action) {
	switch (action.type) {
		case RECIPES_LOADED:
			return { ...state, data: [ ...state.data, ...action.payload ] };
		case RECIPES_CURRENT_RECIPE_ID_IS_SET:
			return { ...state, currentRecipeId: action.payload };
		default:
			return state;
	}
}


export const recipesRequested = () => ({ type: RECIPES_REQUESTED });
export const recipesReceived = () => ({ type: RECIPES_RECEIVED });
export const recipesLoaded = (recipes) => ({ type: RECIPES_LOADED, payload: recipes });
export const currentRecipeIdIsSet = (id) => ({ type: RECIPES_CURRENT_RECIPE_ID_IS_SET, payload: id });


export const loadRecipes = () => {};

export const fetchRecipes = () =>
	(dispatch) => {
		const recipes = api.getRecipes();
		dispatch(recipesLoaded(recipes));
		dispatch(currentRecipeIdIsSet(recipes[0].id));
	};