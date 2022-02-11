import styled from 'styled-components';
import { device } from './utils/media';


export const StyledApp = styled.div`
	max-width: 1200px;
	min-width: 270px;
	margin: auto;
  font-size: 0.7em;

  @media ${device.landscapePhonesAndUp} {
    font-size: 0.8em;
  }

  @media ${device.tabletsAndUp} {
  	font-size: 0.9em;
  }

  @media ${device.desctops} {
  	font-size: 1em;
  }
`;


export const Page = styled.div`
	box-sizing: border-box;
	padding: 0.3em 0.7em 1em 0.7em;
  border-style: solid;
  border-width: 0.419em 0.27em;
  border-color: #FFFFFF;
  border-radius: 1.25em;
  background-color: #F0F7FF;

  @media ${device.landscapePhonesAndUp} {
    padding: 0.4em 1em 1em 1em;
  }

  @media ${device.tabletsAndUp} {
    padding: 0.4em 0.8em 1em 0.8em;
  }

  @media ${device.desctops} {
  	padding: 0.593em 1.551em 2.076em 1.551em;
  }
`;
