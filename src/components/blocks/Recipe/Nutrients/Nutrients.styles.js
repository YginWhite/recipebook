import styled from 'styled-components';

export const StyledNutrients = styled.section``;

export const Header = styled.header`
  h4 {
    font-size: 1.214em;
    line-height: 1.648;
    color: #969696;
  }
`;

export const Composition = styled.div`
	margin: 0.699em 0 0.944em 0;
  display: flex;
  gap: 0.944em;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1.504em;
`;

export const Button = styled.button`
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

export const AddButton = styled(Button)`
	border: 1.07907px solid #408EBA;
  background-color: transparent;
  color: #408EBA;
`;