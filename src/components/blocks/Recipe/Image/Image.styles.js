import styled from 'styled-components';
import { device } from '../../../../utils/media';


export const StyledImage = styled.section`
  border-radius: 1em;
  border: 0.313em solid white;
  overflow: hidden;
  box-shadow: 0px 7px 20px -12px rgba(0,0,0,0.3);

  @media ${device.landscapePhonesAndUp} {
    max-width: 556px;
  }

  @media ${device.tabletsAndUp} {
    border-radius: 229px;
    box-shadow: 0px 7px 40px -12px rgba(0,0,0,0.3);
  }

  @media ${device.desctops} {
    border-radius: 229px;
    box-shadow: 0px 7px 40px -12px rgba(0,0,0,0.3);
  }
`;


export const Img = styled.img`
  display: block;
  width: 100%;

  @media ${device.landscapePhonesAndUp} {
    max-width: 556px;
  }

  @media ${device.tabletsAndUp} {
    height: 320px;
    width: initial;
    margin-left: -80px;
  }

  @media ${device.desctops} {
    height: 420px;
    width: initial;
    margin-left: -105px;
  }
`;


export const Container = styled.figure`
  @media ${device.landscapePhonesAndUp} {
    max-width: 556px;
  }

  @media ${device.tabletsAndUp} {
    width: 320px;
    height: 320px;
  }

  @media ${device.desctops} {
    width: 420px;
    height: 420px;
  }
`;