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
`;

export const Item = styled.li`
  transform: rotate(-90deg);

  @media ${device.smallDevices} {
    transform: initial;
  }

  h2 {
    font-size: 1.095em;
    text-align: center;
    color: ${props => props.selected ? '#404040' : '#969696'};

    @media ${device.smallDevices} {
      font-size: 0.8em;
    }
  }

  &:after {
  	content: '';
  	display: block;
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
  }
`;