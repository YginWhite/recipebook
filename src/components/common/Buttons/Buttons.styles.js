import styled from 'styled-components';

export const StyledButton = styled.button`
	width: 124.86px;
  padding: 7.12px 0 7.82px 0;
  text-align: center;
  border: none;
  border-radius: 4.32px;
  background-color: #408EBA;
  font-size: 0.499em;
  font-weight: 500;
  color: #FFFFFF;
`;

export const StyledButtonWithoutBg = styled(StyledButton)`
	border: 1.07907px solid #408EBA;
  background-color: transparent;
  color: #408EBA;
`;