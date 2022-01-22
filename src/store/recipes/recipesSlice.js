import { createSelector } from 'reselect';
import { api, recipesAPI } from '../../services/api';

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


export const selectCurrentRecipeId = state => state.recipes.currentRecipeId;
export const selectLoadingFlag = state => state.recipes.isLoading;
export const selectRecipes = state => state.recipes.data;

export const selectRecipeIds = createSelector(
	selectRecipes,
	recipes => recipes.map(({ id }) => id)
);

export const selectRecipeById = createSelector(
	selectRecipes,
	(state, recipeId) => recipeId,
	(recipes, recipeId) => recipes.filter(({ id }) => recipeId === id)[0],
);

export const selectRecipeImgSrc = createSelector(
	selectRecipeById,
	recipe => recipe.image
);

export const selectRecipeDishTypes = createSelector(
	selectRecipeById,
	recipe => recipe.dishTypes.filter(
		type => ['dinner', 'lunch', 'breakfast'].includes(type)
	)
);

export const selectRecipeIngredients = createSelector(
	selectRecipeById,
	recipe => recipe.extendedIngredients.map(
		({ name, image, original }) => ({ name, imageName: image, original })
	)
);

export const selectRecipeNutritionValues = createSelector(
	selectRecipeById,
	recipe => recipe.nutrition.nutrients
		.map(({ name, amount, unit }) => ({ name, amount, unit }))
		.filter(({ name }) => ['Calories', 'Fat', 'Carbohydrates', 'Protein'].includes(name))
);

export const selectRecipeSummary = createSelector(
	selectRecipeById,
	recipe => ({ title: recipe.title, summary: recipe.summary })
);

export const selectSummaries = createSelector(
	selectRecipes,
	recipes => recipes.map(({ title, summary, id }) => ({ title, summary, id }))
);

export const selectShortRecipesInfo = createSelector(
	selectRecipes,
	recipes => recipes.map(
		({ title, id, image, readyInMinutes  }) => ({ title, id, imageSrc: image, readyInMinutes })
	)
);

export const loadRecipes = () => {};

// export const fetchRecipes = (query, offset) =>
// 	async (dispatch, getState) => {
// 		const response = await recipesAPI.searchRecipes(query, offset);
// 		console.log(response);
// 	}

export const fetchRecipes = () =>
	async (dispatch, getState) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const recipes = api.getRecipes();
				dispatch(recipesLoaded(recipes));
				dispatch(currentRecipeIdIsSet(recipes[0].id));
				resolve();
			}, 1000);
		});
		

		// const state = getState();
		// const data = selectRecipeSummary(state, 639752);
		// console.log(data);
	};