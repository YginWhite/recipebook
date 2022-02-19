import React from 'react';

import { StyledImage, Container, Img } from './Image.styles';

import dish from '../../../assets/images/dish.png';

const Image = ({ src, simple }) => {
	return (
		<StyledImage borderType='recipe_img' as='section' simple={simple}>
      <Container simple={simple}>
        <Img src={src} alt='dish' simple={simple}/>
      </Container>
		</StyledImage>
	);
};

export default Image;