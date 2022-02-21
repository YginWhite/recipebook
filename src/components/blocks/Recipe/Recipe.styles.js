import styled from 'styled-components';
import { device } from '../../../utils/media';
import { StyledImage } from '../Image/Image.styles';
import { StyledNutrients } from '../Nutrients/Nutrients.styles';
import { StyledIngredients } from '../Ingredients/Ingredients.styles';
import { StyledBorder } from '../../common/Borders/Borders.styles';

export const StyledRecipe = styled(StyledBorder)`
  padding: 1.009em 0.714em 1.997em 0.714em;
  box-shadow: 0px 2.15814px 5.39535px rgba(0, 0, 0, 0.15);

  @media ${device.tabletsAndUp} {
    position: relative;
    width: 550px;
  }

  @media ${device.desctops} {
    position: relative;
    width: 623.7px;
  }

  ${StyledIngredients} {
    margin-top: 1.146em;
  }

  ${StyledNutrients} {
    margin-top: 1.043em;
  }

  ${StyledImage} {
    @media ${device.smallDevices} {
      margin-top: 1em;
    }

    @media ${device.landscapePhonesAndUp} {
      margin: 0 auto;
      margin-top: 1em;
    }

    @media ${device.tabletsAndUp} {
      position: absolute;
      right: -164px;
      top: 75px;
    }

    @media ${device.desctops} {
      position: absolute;
      right: -212px;
      top: 45px;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1.504em;
`;