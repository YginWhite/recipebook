import styled from 'styled-components';
import { device } from '../../../../utils/media';

export const StyledIngredients = styled.section``;

export const Header = styled.header`
  h4 {
    font-size: 1.214em;
		color: #969696;
  }
`;

export const Items = styled.div`
	width: 291.55px;
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 0.934em;

  @media ${device.smallDevices} {
    width: initial;
    row-gap: 0.5em;
  }
`;

export const Buttons = styled.div`
	margin-top: 1.043em;
`;