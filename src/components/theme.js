const colors = {
	body_background: '#E5E5E5',
	page_background: '#F0F7FF',
	border: '#FFFFFF',
	button: '#408EBA',
	button_text: '#FFFFFF',
	primary_text: '#404040',
	secondary_text: '#969696',
	strong_text: '#000000'
};


export const theme = {
	colors: {
		...colors
	},

	fonts: {
		main: {
			family: 'Roboto, sans-serif',
			weight: {
				regular: 400,
				medium: 500
			}
		},
		heading: {
			family: 'Arima Madurai, cursive'
		}
	},

	borders: {
		page: {
			width: '0.419em 0.27em',
  		color: colors.border,
  		radius: '1.25em'
		},
		recipe: {
			width: '0.431em 0.539em',
  		color: colors.border,
  		radius: '1.214em'
		},
		recipe_img: {
			width: '0.313em',
			color: colors.border,
  		radius: '1em'
		},
		recipe_small: {
			width: '1.69px 1.97px',
			color: colors.border,
  		radius: '0.439em'
		},
		recipe_small_img: {
			width: '2px',
			color: '#FFFFFF',
  		radius: '50px'
		},
		ingredient_image: {
			width: '0.51px 0.68px',
  		color: colors.border,
  		radius: '0.439em'
		},
		nutrient: {
			width: '1.05px 0.97px',
			color: colors.border,
  		radius: '0.439em'
		}
	}
};