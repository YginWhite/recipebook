import styled from 'styled-components';
import { device } from '../../../utils/media';


export const StyledRecipeType = styled.ul`
  display: flex;
  justify-content: space-between;

  @media ${device.tabletsAndUp} {
    width: 550px;
  }

  @media ${device.desctops} {
    width: 58.13%;
  }
`;


export const Item = styled.li`
  cursor: pointer;
`;


export const Title = styled.h2`
  font-size: 1.095em;
  color: ${props => props.selected ? '#404040' : '#969696'};
`;