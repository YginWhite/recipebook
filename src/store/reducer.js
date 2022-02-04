import { combineReducers } from 'redux';
import recipesReducer from './recipes/recipesSlice';
import appReducer from './app/appSlice';
import paginationReducer from './pagination/paginationSlice';

const rootReducer = combineReducers({
	recipes: recipesReducer,
	app: appReducer,
	pagination: paginationReducer
});

export default rootReducer;