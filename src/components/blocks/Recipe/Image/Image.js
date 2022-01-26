import React from 'react';
import styled from 'styled-components';

import dish from '../../../../assets/images/dish.png';

const StyledImage = styled.section`
	position: absolute;
  left: 395.05px;
  top: 38.85px;
  height: 454.29px;
  width: 454.29px;
  border-radius: 229px;
  border: 5px solid white;
  overflow: hidden;
  box-shadow: 0px 1.75848px 4.39621px rgba(0, 0, 0, 0.15);

  img {
  	height: 454.29px;
  }
`;

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