const size = {
	small: 576,
	medium: 768,
	large: 992
};
	

export const device = {
	smallDevices:
		`only screen and (max-width: ${size.small}px)`,
	landscapePhonesAndUp:
		`only screen and (min-width: ${size.small + 1}px) and (max-width: ${size.medium}px)`,
	tabletsAndUp:
		`only screen and (min-width: ${size.medium + 1}px) and (max-width: ${size.large}px)`,
	desctops:
		`only screen and (min-width: ${size.large + 1}px)`
};
