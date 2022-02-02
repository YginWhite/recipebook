import styled from 'styled-components';
import { device } from '../../../utils/media';

export const StyledRecipe = styled.article`
	box-sizing: border-box;
	position: relative;
  width: 623.7px;
  padding: 1.009em 0.714em 1.997em 0.714em;
  border-style: solid;
  border-width: 0.431em 0.539em;
  border-color: #FFFFFF;
  border-radius: 1.214em;
  box-shadow: 0px 2.15814px 5.39535px rgba(0, 0, 0, 0.15);

  @media ${device.smallDevices} {
    width: initial;
    position: initial;
  }

  @media ${device.landscapePhonesAndUp} {
    width: initial;
    position: initial;
  }

  section.recipe-ingredients {
  	margin-top: 1.146em;
  }

  section.recipe-nutrients {
  	margin-top: 1.043em;
  }
`;