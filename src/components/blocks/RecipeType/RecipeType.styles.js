import styled from 'styled-components';
import { device } from '../../../utils/media';

export const StyledRecipeType = styled.ul`
	//width: 623.7px;
	width: 58.13%;
  display: flex;
  justify-content: space-between;

  @media ${device.smallDevices} {
    width: initial;
  }
`;

export const Item = styled.li`
  h2 {
		font-size: 1.095em;
		color: ${props => props.selected ? '#404040' : '#969696'};
  }
`;