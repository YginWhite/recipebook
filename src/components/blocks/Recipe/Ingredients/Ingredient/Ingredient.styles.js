import styled from 'styled-components';
import { device } from '../../../../../utils/media';


export const StyledIngredient = styled.div`
  display: flex;

  @media ${device.smallDevices} {
    justify-content: space-between;
  }

  @media ${device.landscapePhonesAndUp} {
    justify-content: space-between;
  }

  @media ${device.tabletsAndUp} {
    width: 139.8px;
    height: 39.57px;
  }

  @media ${device.desctops} {
    width: 139.8px;
    height: 39.57px;
  }
`;


export const Container = styled.figure`
  box-sizing: border-box;
  padding: 0.353em 0.682em 0.397em 0.679em;
  border-style: solid;
  border-width: 0.51px 0.68px;
  border-color: #FFFFFF;
  border-radius: 0.439em;
  box-shadow: 0px 1.75848px 4.39621px rgba(0, 0, 0, 0.15);

  @media ${device.tabletsAndUp} {
   width: 49.39px;
  }

  @media ${device.desctops} {
    width: 49.39px;
  }
`;


export const Img = styled.img`
  width: 26.42px;
  height: 26.37px;
`;


export const Description = styled.div`
	padding-left: 0.375em;
	padding-top: 0.375em;
`;


export const Header = styled.h5`
  font-size: 0.8em;
  color: #404040;

  @media ${device.landscapePhonesAndUp} {
    font-size: 0.7em;
  }

  @media ${device.tabletsAndUp} {
    font-size: 0.659em;
  }

  @media ${device.desctops} {
    font-size: 0.659em;
  }
`;


export const Content = styled.div`
  margin-top: 0.313em;
  font-size: 0.507em;
  font-weight: 500;
  color: #969696;

  @media ${device.smallDevices} {
    font-size: 0.7em;
  }

  @media ${device.landscapePhonesAndUp} {
    font-size: 0.6em;
    margin-top: 0.7em;
  }
`;