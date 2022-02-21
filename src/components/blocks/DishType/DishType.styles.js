import styled from 'styled-components';
import { device } from '../../../utils/media';


export const StyledDishType = styled.ul`
	display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media ${device.tabletsAndUp} {
    flex-direction: column;
    justify-content: space-between;
    height: 357.17px;
  }

  @media ${device.desctops} {
    flex-direction: column;
    justify-content: space-between;
    height: 357.17px;
  }
`;


export const Flag = styled.div`
  width: 5px;
  height: 5px;
  margin: 0.279em auto 7px auto;
  border-radius: 9.71px;
  background-color: ${props => props.selected ? '#408EBA' : 'transparent'};


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

  @media ${device.desctops} {
    width: 9.71px;
    height: 9.71px;
    margin: 0.279em auto 0 auto;
  }
`;


export const Item = styled.li`
  @media ${device.tabletsAndUp} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: rotate(-90deg);
  }

  @media ${device.desctops} {
    transform: rotate(-90deg);
  }
`;


export const Title = styled.h2`
  font-size: 0.8em;
  text-align: center;
  color: ${props => props.selected ? '#404040' : '#969696'};

  @media ${device.tabletsAndUp} {
    font-size: 0.75em;
  }

  @media ${device.desctops} {
    font-size: 1.095em;
  }
`;