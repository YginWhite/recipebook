import styled from 'styled-components';
import { device } from '../../utils/media';

export const StyledHomePage = styled.div`
	box-sizing: border-box;
	padding: 0.593em 1.551em 2.076em 1.551em;
  border-style: solid;
  border-width: 0.419em 0.27em;
  border-color: #FFFFFF;
  border-radius: 1.25em;
  background-color: #F0F7FF;

  @media ${device.smallDevices} {
    padding: 0.3em 0.7em 1em 0.7em;
  }

  @media ${device.landscapePhonesAndUp} {
    padding: 0.4em 1em 1em 1em;
  }

  @media ${device.tabletsAndUp} {
    padding: 0.4em 0.8em 1em 0.8em;
  }
`;