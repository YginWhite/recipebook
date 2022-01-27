export const storage = {
	getRecipes() {
		return JSON.parse(localStorage.getItem('recipes'));
	},
	setRecipes(recipes) {
		localStorage.setItem('recipes', JSON.stringify(recipes));
	}
};