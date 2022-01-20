import { combineReducers } from 'redux';
import recipesReducer from './recipes/recipesSlice';

const rootReducer = combineReducers({
	recipes: recipesReducer
});

export default rootReducer;