import styled from 'styled-components';
import { device } from '../../../../utils/media';
import { StyledSummary, Body } from '../../../blocks/Summary/Summary.styles';
import { StyledImage } from '../../../blocks/Image/Image.styles';
import { StyledIngredients, Items, Header } from '../../../blocks/Ingredients/Ingredients.styles';
import { StyledNutrients } from '../../../blocks/Nutrients/Nutrients.styles';

export const StyledMain = styled.div`
	${StyledImage} {
		margin-top: 1em;
  	margin-bottom: 1.5em;
    margin-left: auto;
    margin-right: auto;
	}

  ${StyledSummary} {
    margin-bottom: 1.5em;
  }

  ${Body} {
    width: 100%;
    line-height: 1.4;
  }

  ${StyledIngredients} {
    margin-bottom: 1.5em;
  }

  ${Header} {
    margin-bottom: 1em;
  }

  ${Items} {
    width: 100%;
    gap: 1em;
    justify-content: initial;
  }

  ${StyledNutrients} {
    margin-top: 1.5em;
  }
`;