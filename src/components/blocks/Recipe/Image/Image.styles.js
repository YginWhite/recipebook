import styled from 'styled-components';
import { device } from '../../../../utils/media';

export const StyledImage = styled.section`
	position: absolute;
  right: -212px;
  top: 45px;
  border-radius: 229px;
  border: 0.313em solid white;
  overflow: hidden;
  box-shadow: 0px 7px 40px -12px rgba(0,0,0,0.3);

  @media ${device.smallDevices} {
    position: initial;
    right: initial;
    top: initial;
    border-radius: 1em;
    margin-top: 1em;
    box-shadow: 0px 7px 20px -12px rgba(0,0,0,0.3);
  }

  @media ${device.landscapePhonesAndUp} {
    position: initial;
    right: initial;
    top: initial;
    border-radius: 1em;
    box-shadow: 0px 7px 20px -12px rgba(0,0,0,0.3);
    max-width: 556px;
    margin: 0 auto;
    margin-top: 1em;
  }
`;

export const Container = styled.figure`
  width: 420px;
  height: 420px;

  @media ${device.smallDevices} {
    height: initial;
    width: initial;
  }

  @media ${device.landscapePhonesAndUp} {
    height: initial;
    width: initial;
    max-width: 556px;
  }
`;

export const Img = styled.img`
  display: block;
  height: 420px;
  margin-left: -105px;

  @media ${device.smallDevices} {
    height: initial;
    width: 100%;
    margin-left: initial;
  }

  @media ${device.landscapePhonesAndUp} {
    height: initial;
    width: 100%;
    max-width: 556px;
    margin-left: initial;
  }
`;