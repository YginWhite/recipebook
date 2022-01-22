import { combineReducers } from 'redux';
import recipesReducer from './recipes/recipesSlice';
import appReducer from './app/appSlice';

const rootReducer = combineReducers({
	recipes: recipesReducer,
	app: appReducer
});

export default rootReducer;