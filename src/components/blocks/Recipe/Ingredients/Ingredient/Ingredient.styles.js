import styled from 'styled-components';
import { device } from '../../../../../utils/media';


export const StyledIngredient = styled.div`
	width: 139.8px;
	height: 39.57px;
  display: flex;

  @media ${device.smallDevices} {
    width: initial;
    height: initial;
    justify-content: space-between;
  }

  @media ${device.landscapePhonesAndUp} {
    width: initial;
    height: initial;
    justify-content: space-between;
  }
`;


export const Container = styled.figure`
  box-sizing: border-box;
  width: 49.39px;
  padding: 0.353em 0.682em 0.397em 0.679em;
  border-style: solid;
  border-width: 0.51px 0.68px;
  border-color: #FFFFFF;
  border-radius: 0.439em;
  box-shadow: 0px 1.75848px 4.39621px rgba(0, 0, 0, 0.15);

  @media ${device.smallDevices} {
    width: initial;
    padding: 0.353em 0.682em 0.397em 0.679em;
  }

  @media ${device.landscapePhonesAndUp} {
    width: initial;
    padding: 0.353em 0.682em 0.397em 0.679em;
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
  font-size: 0.659em;
  color: #404040;

  @media ${device.smallDevices} {
    font-size: 0.8em;
  }

  @media ${device.landscapePhonesAndUp} {
    font-size: 0.7em;
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