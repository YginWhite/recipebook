import { createSelector } from 'reselect';
import { api, recipesAPI } from '../../services/api';
import { utils } from '../../utils/utils';

//const RECIPES_REQUESTED = 'recipes/recipesRequested';
//const RECIPES_RECEIVED = 'recipes/recipesReceived';
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


//export const recipesRequested = () => ({ type: RECIPES_REQUESTED });
//export const recipesReceived = () => ({ type: RECIPES_RECEIVED });
export const recipesLoaded = (recipes) => ({ type: RECIPES_LOADED, payload: recipes });
export const currentRecipeIdIsSet = (id) => ({ type: RECIPES_CURRENT_RECIPE_ID_IS_SET, payload: id });



//export const selectLoadingFlag = state => state.recipes.isLoading;




export const selectRecipes = state => state.recipes.data;
export const selectCurrentRecipeId = state => state.recipes.currentRecipeId;

export const selectCurrentRecipe = createSelector(
	selectRecipes,
	selectCurrentRecipeId,
	(recipes, currentRecipeId) => recipes.filter(recipe => recipe.id === currentRecipeId)[0]
);

export const selectRecipeDishTypes = createSelector(
	selectCurrentRecipe,
	recipe => recipe.dishTypes
);

export const selectRecipeSummary = createSelector(
	selectCurrentRecipe,
	(state, summaryLength) => summaryLength,
	(recipe, summaryLength) => {
		const data = { title: recipe.title, summary: recipe.summary };
		if (summaryLength) {
			return { ...data, summary: utils.trimStringToLength(data.summary, summaryLength) };
		}
		return data;
	}
);

export const selectRecipeIngredients = createSelector(
	selectCurrentRecipe,
	(state, amount) => amount,
	(recipe, amount) => {
		let ingredients = recipe.extendedIngredients.map(
			({ name, image, original }) => ({ name, imageName: image, original })
		);
		if (amount) ingredients = ingredients.slice(0, amount);
		return ingredients.map(
			item => ({ ...item, imgSrc: recipesAPI.createIngredientImageSrc(item.imageName) })
		);
	}
);

export const selectRecipeNutritionValues = createSelector(
	selectCurrentRecipe,
	(state, nutrientNames) => nutrientNames,
	(recipe, nutrientNames) => {
		let nutrients = recipe.nutrition.nutrients.map(
			({ name, amount, unit }) => ({ name, amount, unit })
		);

		if (nutrientNames) {
			nutrients = nutrients.filter(({ name }) => nutrientNames.includes(name));
		}

		return nutrients.map(nutrient => {
			const item = { ...nutrient,  amount: Math.round(nutrient.amount) };
			if (item.name === 'Carbohydrates') {
				return { ...item, name: 'Carbs' }
			}
			return item;
		});
	}
);












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

				// const state = getState();
				// const data = selectRecipeDishTypes(state, 639752);
				// console.log(data);
			}, 1000);
		});
	};