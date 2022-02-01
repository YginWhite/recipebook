import styled from 'styled-components';

export const StyledRecipeType = styled.ul`
	margin: 0;
	padding: 0;
	//width: 623.7px;
	width: 58.13%;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.li`
  h2 {
		font-size: 1.095em;
		color: ${props => props.selected ? '#404040' : '#969696'};
  }
`;