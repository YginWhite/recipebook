import React from 'react';
import styled from 'styled-components';

import dish from '../../../../assets/images/dish.png';

const StyledImage = styled.section`
	position: absolute;
  right: -212px;
  top: 45px;
  border-radius: 229px;
  border: 5px solid white;
  overflow: hidden;
  box-shadow: 0px 7px 40px -12px rgba(0,0,0,0.3);

  figure {
    margin: 0;
    height: 420px;
    width: 420px;
  }

  img {
    display: block;
  	height: 420px;
    margin-left: -105px;
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