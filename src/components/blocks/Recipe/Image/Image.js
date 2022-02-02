import React from 'react';

import { StyledImage, Container, Img } from './Image.styles';

import dish from '../../../../assets/images/dish.png';

const Image = ({ src }) => {
	return (
		<StyledImage>
      <Container>
        <Img src={src} alt='dish'/>
      </Container>
		</StyledImage>
	);
};

export default Image;