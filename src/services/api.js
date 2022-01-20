import axios from 'axios';
import recipes from '../assets/recipes/recipes.json';

export const api = {
	getRecipes() {
		return recipes;
	}
};