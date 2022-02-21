import styled from 'styled-components';
import { device } from '../../../utils/media';


export const Header = styled.header`
  h4 {
    font-size: 1.214em;
		color: #969696;
  }
`;


export const Items = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 0.5em;

  @media ${device.landscapePhonesAndUp} {
    row-gap: 0.7em;
  }

  @media ${device.tabletsAndUp} {
    width: 291.55px;
    row-gap: 0.934em;
  }

  @media ${device.desctops} {
    width: 291.55px;
    row-gap: 0.934em;
  }
`;


export const Buttons = styled.div``;


export const StyledIngredients = styled.section`
  ${Buttons} {
    margin-top: 1.043em;
  }
`;
