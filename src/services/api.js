import axios from 'axios';
import recipes from '../assets/recipes/recipes.json';

export const api = {
	getRecipes() {
		return recipes;
	}
};


const RECIPES_API_KEY = process.env.REACT_APP_RECIPES_API_KEY;

export const recipesAPI = {
	searchRecipes(query, offset, number) {
		return axios
			.get('https://api.spoonacular.com/recipes/complexSearch', {
				params: {
					apiKey: RECIPES_API_KEY,
					query,
					addRecipeInformation: true,
					addRecipeNutrition: true,
					fillIngredients: true,
					offset,
					number
				}
			})
			.then(response => response);
	},

	createIngredientImageSrc(name) {
		return `https://spoonacular.com/cdn/ingredients_100x100/${name}`;
	},
	
	getRecipesById(ids) {
		return axios
			.get('https://api.spoonacular.com/recipes/informationBulk', {
				params: {
					apiKey: RECIPES_API_KEY,
					ids: ids.join(','),
					includeNutrition: true
				}
			})
			.then(response => response);
	}
};