import styled from 'styled-components';
import { device } from '../../../../utils/media';

export const StyledNutrients = styled.section``;

export const Header = styled.header`
  h4 {
    font-size: 1.214em;
    color: #969696;
  }
`;

export const Items = styled.div`
	margin: 0.699em 0 0.944em 0;
  display: flex;
  gap: 0.944em;

  @media ${device.smallDevices} {
    flex-wrap: wrap;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1.504em;
`;