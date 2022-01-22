export const utils = {
	trimStringToLength(str, len) {
  	if (str.length > len) {
    	return str.slice(0, len - 3).concat('...');
  	}
  	return str;
	}
};