import { createSelector } from 'reselect';
import { api, recipesAPI } from '../../services/api';
import { utils } from '../../utils/utils';
import { storage } from '../../services/storage';

const RECIPES_REQUESTED = 'recipes/recipesRequested';
const RECIPES_RECEIVED = 'recipes/recipesReceived';
const RECIPES_LOADED = 'recipes/recipesLoaded';
const RECIPES_CURRENT_RECIPE_ID_IS_SET = 'recipes/currentRecipeIdIsSet';
const RECIPES_LAST_DISPLAYED_RECIPE_IND_IS_SET = 'recipes/lastDisplayedRecipeIndIsSet';
const RECIPES_AMOUNT_OF_RECIPES_IS_SET = 'recipes/amountOfRecipesIsSet';
const RECIPES_LOADED_RECIPES_ARE_OVER = 'recipes/loadedRecipesAreOver';


const initialState = {
	data: [],								      // recipes data
	isLoading: false,             // loading status
	currentRecipeId: null,	      // current displayed recipe's id
	amount: null,                 // number of displayed recipes 
	lastDisplayedRecipeInd: null, // ind of the last displayed recipe at a time
	offset: 0,                    // the number of recipes to skip when fetching from the server,
	loadedRecipesOver: false			// flag shows that no more recipes to display 
};


export default function recipesReducer(state = initialState, action) {
	switch (action.type) {
		case RECIPES_REQUESTED:
			return { ...state, isLoading: true };
		case RECIPES_RECEIVED:
			return { ...state, isLoading: false };
		case RECIPES_LOADED:
			return { ...state, data: [ ...state.data, ...action.payload ] };
		case RECIPES_CURRENT_RECIPE_ID_IS_SET:
			return { ...state, currentRecipeId: action.payload };
		case RECIPES_LAST_DISPLAYED_RECIPE_IND_IS_SET:
			return { ...state, lastDisplayedRecipeInd: action.payload };
		case RECIPES_AMOUNT_OF_RECIPES_IS_SET:
			return { ...state, amount: action.payload };
		case RECIPES_LOADED_RECIPES_ARE_OVER:
			return { ...state, loadedRecipesOver: action.payload };
		default:
			return state;
	}
}


export const recipesRequested = () => ({ type: RECIPES_REQUESTED });
export const recipesReceived = () => ({ type: RECIPES_RECEIVED });
export const recipesLoaded = (recipes) => ({ type: RECIPES_LOADED, payload: recipes });
export const currentRecipeIdIsSet = (id) => ({ type: RECIPES_CURRENT_RECIPE_ID_IS_SET, payload: id });
export const lastDisplayedRecipeIndIsSet = (ind) => ({ type: RECIPES_LAST_DISPLAYED_RECIPE_IND_IS_SET, payload: ind });
export const amountOfRecipesIsSet = (amount) => ({ type: RECIPES_AMOUNT_OF_RECIPES_IS_SET, payload: amount });
export const loadedRecipesAreOver = (flag) => ({ type: RECIPES_LOADED_RECIPES_ARE_OVER, payload: flag });


export const changeDisplayedRecipesAmount = (amount) =>
 	(dispatch, getState) => {
 		const state = getState().recipes;
 		const lastDisplayedRecipeInd = state.lastDisplayedRecipeInd;
 		const oldAmount = state.amount;
 		const loadedRecipesNumber = state.data.length;

 		dispatch(amountOfRecipesIsSet(amount));
 		
 		if (lastDisplayedRecipeInd) {
 			let newInd;
 			if (oldAmount > amount) {
 				newInd = lastDisplayedRecipeInd - (oldAmount - amount);
 				if (newInd < 0) newInd = 0;
 			}
 			if (oldAmount < amount) {
 				newInd = lastDisplayedRecipeInd + (amount - oldAmount);
 				if (newInd > loadedRecipesNumber) newInd = loadedRecipesNumber - 1;
 			}
 			if (newInd !== undefined) {
 				dispatch(lastDisplayedRecipeIndIsSet(newInd));
 				// console.log(`
 				// 	lastDisplayedRecipeInd: ${lastDisplayedRecipeInd},
 				// 	oldAmount: ${oldAmount},
 				// 	amount: ${amount},
 				// 	newInd: ${newInd}
 				// `);
 			}
 		}
	};


export const goRecipesAhead = () => 
	(dispatch, getState) => {
		const state = getState().recipes;
		const oldLastInd = state.lastDisplayedRecipeInd;
		const loadedAmount = state.data.length;
		const displayedAmount = state.amount;

		let newLastInd = oldLastInd + displayedAmount;
		if (newLastInd > loadedAmount - 1) {
			newLastInd = loadedAmount - 1;
		}

		if (newLastInd === oldLastInd) {
			dispatch(loadedRecipesAreOver(true));
		} else {
			dispatch(lastDisplayedRecipeIndIsSet(newLastInd));
		}
	};


export const goRecipesBack = () => 
	(dispatch, getState) => {
		const state = getState().recipes;
		const oldLastInd = state.lastDisplayedRecipeInd;
		const displayedAmount = state.amount;

		let newLastInd = oldLastInd - displayedAmount;
		if (newLastInd < displayedAmount - 1) {
			newLastInd = displayedAmount - 1;
		}
		dispatch(lastDisplayedRecipeIndIsSet(newLastInd));
	};


//export const selectLoadingFlag = state => state.recipes.isLoading;
export const selectRecipes = state => state.recipes.data;
export const selectCurrentRecipeId = state => state.recipes.currentRecipeId;
export const selectLastDisplayedRecipeInd = state => state.recipes.lastDisplayedRecipeInd;
export const selectLoadedRecipesAmount = state => state.recipes.data.length;
export const selectDispalyedRecipesAmount = state => state.recipes.amount;
export const selectLoadedRecipesOver = state => state.recipes.loadedRecipesOver;

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

export const selectRecipeImgSrc = createSelector(
	selectCurrentRecipe,
	recipe => recipe.image
);

export const selectShortRecipesDescription = createSelector(
	selectRecipes,
	selectDispalyedRecipesAmount,
	selectLastDisplayedRecipeInd,
	(recipes, amount, ind) => recipes
		.slice(ind - amount + 1, ind + 1)
		.map(
			({ title, id, image, readyInMinutes  }) => ({ title, id, imageSrc: image, readyInMinutes })
		)
);


// export const selectRecipeIds = createSelector(
// 	selectRecipes,
// 	recipes => recipes.map(({ id }) => id)
// );

// export const selectRecipeById = createSelector(
// 	selectRecipes,
// 	(state, recipeId) => recipeId,
// 	(recipes, recipeId) => recipes.filter(({ id }) => recipeId === id)[0],
// );


export const loadRecipes = () => 
	async (dispatch, getState) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const recipes = storage.getRecipes() || api.getRecipes();
				const amount = getState().recipes.amount;

				dispatch(recipesLoaded(recipes));
				dispatch(currentRecipeIdIsSet(recipes[0].id));
				dispatch(lastDisplayedRecipeIndIsSet(amount - 1));

				resolve();
			}, 0);
		});
	};

// export const fetchRecipes = (query, offset) =>
// 	async (dispatch, getState) => {
// 		//const response = await recipesAPI.searchRecipes(query, offset);
// 		console.log('recipes fetched');
// 	}

export const fetchMoreRecipes = (query, offset) =>
	async (dispatch, getState) => {
		dispatch(recipesRequested());
		const state = getState().recipes;
		try {
			const response = await recipesAPI.searchRecipes('', 10);
			const recipes = response.data.results;
			console.log(recipes);
			dispatch(recipesLoaded(recipes));
			dispatch(currentRecipeIdIsSet(recipes[0].id));
			dispatch(lastDisplayedRecipeIndIsSet(state.data.length + recipes.length - 1));

		} catch (err) {
			console.log(err);
		} finally {
			dispatch(recipesReceived());
		}
	}


// export const fetchRecipes = () =>
// 	async (dispatch, getState) => {
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 				const recipes = api.getRecipes();
// 				dispatch(recipesLoaded(recipes));
// 				dispatch(currentRecipeIdIsSet(recipes[0].id));

// 				//storage.setRecipes(recipes);

// 				resolve();

// 				// const state = getState();
// 				// const data = selectRecipeDishTypes(state, 639752);
// 				// console.log(data);
// 			}, 1000);
// 		});
// 	};