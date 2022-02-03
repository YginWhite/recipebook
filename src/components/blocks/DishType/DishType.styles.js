import styled from 'styled-components';
import { device } from '../../../utils/media';


export const StyledDishType = styled.ul`
	display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 357.17px;
  margin-left: -1.438em;

  @media ${device.smallDevices} {
    flex-direction: row;
    justify-content: space-evenly;
    height: initial;
    margin-left: initial;
  }

  @media ${device.landscapePhonesAndUp} {
    flex-direction: row;
    justify-content: space-evenly;
    height: initial;
    margin-left: initial;
  }

  @media ${device.tabletsAndUp} {
    margin-left: -1.8em;
  }
`;


export const Item = styled.li`
  transform: rotate(-90deg);

  @media ${device.smallDevices} {
    transform: initial;
  }

  @media ${device.landscapePhonesAndUp} {
    transform: initial;
  }

  @media ${device.tabletsAndUp} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;


export const Flag = styled.div`
  width: 9.71px;
  height: 9.71px;
  margin: 0.279em auto 0 auto;
  border-radius: 9.71px;
  background-color: ${props => props.selected ? '#408EBA' : 'transparent'};

  @media ${device.smallDevices} {
    width: 5px;
    height: 5px;
    margin-bottom: 7px;
  }

  @media ${device.landscapePhonesAndUp} {
    width: 7px;
    height: 7px;
    margin-bottom: 10px;
  }

  @media ${device.tabletsAndUp} {
    width: 8px;
    height: 8px;
    margin: 0;
  }
`;


export const Header = styled.h2`
  font-size: 1.095em;
  text-align: center;
  color: ${props => props.selected ? '#404040' : '#969696'};

  @media ${device.smallDevices} {
    font-size: 0.8em;
  }

  @media ${device.landscapePhonesAndUp} {
    font-size: 0.8em;
  }

  @media ${device.tabletsAndUp} {
    font-size: 0.75em;
  }
`;