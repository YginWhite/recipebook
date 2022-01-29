import React from 'react';

import { StyledImage } from './Image.styles';

import dish from '../../../../assets/images/dish.png';

const Image = ({ src }) => {
	return (
		<StyledImage>
      <figure>
        <img src={src} alt='dish'/>
      </figure>
		</StyledImage>
	);
};

export default Image;