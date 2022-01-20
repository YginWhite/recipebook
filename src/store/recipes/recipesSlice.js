import { api } from '../../services/api';

const RECIPES_REQUESTED = 'recipes/recipesRequested';
const RECIPES_RECEIVED = 'recipes/recipesReceived';
const RECIPES_LOADED = 'recipes/recipesLoaded';

const initialState = {
	data: [],
	isLoading: false
};

export default function recipesReducer(state = initialState, action) {
	switch (action.type) {
		case RECIPES_LOADED:
			return { ...state, data: [ ...state.data, ...action.payload ] };
		default:
			return state;
	}
}

export const recipesRequested = () => ({ type: RECIPES_REQUESTED });
export const recipesReceived = () => ({ type: RECIPES_RECEIVED });
export const recipesLoaded = (recipes) => ({ type: RECIPES_LOADED, payload: recipes });


export const loadRecipes = () => {};
export const fetchRecipes = () => {
	return recipesLoaded(api.getRecipes());
};