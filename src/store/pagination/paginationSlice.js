const RECIPES_LAST_DISPLAYED_RECIPE_IND_IS_SET = 'recipes/lastDisplayedRecipeIndIsSet';
const RECIPES_AMOUNT_OF_RECIPES_IS_SET = 'recipes/amountOfRecipesIsSet';
const RECIPES_LOADED_RECIPES_ARE_OVER = 'recipes/loadedRecipesAreOver';

const initialState = {
	amount: null,                 // number of displayed recipes 
	lastDisplayedRecipeInd: null, // ind of the last displayed recipe at a time
	loadedRecipesOver: false			// flag shows that no more recipes to display 
};

export default function (state = initialState, action) {
	switch (action.type) {
		case RECIPES_LAST_DISPLAYED_RECIPE_IND_IS_SET:
			return { ...state, lastDisplayedRecipeInd: action.payload };
		case RECIPES_AMOUNT_OF_RECIPES_IS_SET:
			return { ...state, amount: action.payload };
		case RECIPES_LOADED_RECIPES_ARE_OVER:
			return { ...state, loadedRecipesOver: action.payload };
		default:
			return state;
	}
};


export const lastDisplayedRecipeIndIsSet = (ind) => ({ type: RECIPES_LAST_DISPLAYED_RECIPE_IND_IS_SET, payload: ind });
export const amountOfRecipesIsSet = (amount) => ({ type: RECIPES_AMOUNT_OF_RECIPES_IS_SET, payload: amount });
export const loadedRecipesAreOver = (flag) => ({ type: RECIPES_LOADED_RECIPES_ARE_OVER, payload: flag });


export const selectLoadedRecipesOver = state => state.pagination.loadedRecipesOver;


export const changeDisplayedRecipesAmount = (amount) =>
 	(dispatch, getState) => {
 		const state = getState();
 		const lastDisplayedRecipeInd = state.pagination.lastDisplayedRecipeInd;
 		const oldAmount = state.pagination.amount;
 		const loadedRecipesNumber = state.recipes.data.length;

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
 			}
 		}
	};

export const goRecipesAhead = () => 
	(dispatch, getState) => {
		const state = getState();
		const oldLastInd = state.pagination.lastDisplayedRecipeInd;
		const loadedAmount = state.recipes.data.length;
		const displayedAmount = state.pagination.amount;

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
		const state = getState().pagination;
		const oldLastInd = state.lastDisplayedRecipeInd;
		const displayedAmount = state.amount;

		let newLastInd = oldLastInd - displayedAmount;
		if (newLastInd < displayedAmount - 1) {
			newLastInd = displayedAmount - 1;
		}
		dispatch(lastDisplayedRecipeIndIsSet(newLastInd));
	};