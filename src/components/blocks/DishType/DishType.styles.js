import styled from 'styled-components';

export const StyledDishType = styled.ul`
	display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 357.17px;
  padding: 0;
  margin: 0;
  margin-left: -1.438em;
  list-style: none;
`;

export const Item = styled.li`
  transform: rotate(-90deg);

  h2 {
    font-size: 1.095em;
    text-align: center;
    color: ${props => props.selected ? '#404040' : '#969696'};
  }

  &:after {
  	content: '';
  	display: block;
  	width: 9.71px;
  	height: 9.71px;
  	margin: 0.279em auto 0 auto;
  	border-radius: 9.71px;
  	background-color: ${props => props.selected ? '#408EBA' : 'transparent'};
  }
`;