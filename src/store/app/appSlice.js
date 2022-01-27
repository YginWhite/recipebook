import { loadRecipes } from '../recipes/recipesSlice';

const APP_INITIALIZED = 'app/appInitialized';

const initialState = {
	isInitialized: false
};

export default function appReducer(state = initialState, action) {
	switch (action.type) {
		case APP_INITIALIZED:
			return { ...state, isInitialized: true };
		default:
			return state;
	}
};

export const appInitialized = () => ({ type: APP_INITIALIZED });

export const initializeApp = () =>
	async (dispatch, getState) => {
		const promise = dispatch(loadRecipes());
		await Promise.all([ promise ]);
		dispatch(appInitialized());
	};

export const selectIsInitializedFlag = state => state.app.isInitialized;