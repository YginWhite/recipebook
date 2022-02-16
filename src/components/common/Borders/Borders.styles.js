import styled from 'styled-components';

export const StyledBorder = styled.div`
	box-sizing: border-box;
	border-style: solid;
	border-width: ${props => props.theme.borders[props.borderType].width};
  border-color: ${props => props.theme.borders[props.borderType].color};
  border-radius: ${props => props.theme.borders[props.borderType].radius};
`;