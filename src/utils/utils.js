export const utils = {
	trimStringToLength(str, len) {
  	if (str.length > len) {
    	return str.slice(0, len - 3).concat('...');
  	}
  	return str;
	},

	calcDisplayedRecipesAmount(screenWidth) {
		let amount = 0;
		if (screenWidth <= 400) {
			amount = 1;
		} else if (screenWidth > 400 && screenWidth <= 560) {
			amount = 2;
		} else if (screenWidth > 560 && screenWidth <= 575) {
			amount = 3;
		} else if (screenWidth > 575 && screenWidth <= 660) {
			amount = 2;
		} else if (screenWidth > 660 && screenWidth <= 850) {
			amount = 3;
		} else if (screenWidth > 850 && screenWidth <= 1160) {
			amount = 4;
		} else {
			amount = 5;
		}
		return amount;
	} 
};