import styled from 'styled-components';
import { device } from '../../../../../utils/media';

export const StyledNutrient = styled.div`
	width: 70.14px;
  height: 80.93px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  border: 0px solid #FFFFFF;
  border-width: 1.05px 0.97px;
  border-radius: 0.439em;
  box-shadow: 0px 1.75848px 4.39621px rgba(0, 0, 0, 0.15);

  @media ${device.smallDevices} {
    width: 50px;
    height: 60px;
  }
`;

export const Value = styled.div`
  font-size: 1.214em;
  font-weight: 500;
  color: #000000;
`;

export const Name = styled.header`
  h5 {
    font-size: 0.811em;
    color: #000000;
  }
`;

export const Unit = styled.div`
  font-size: 0.809em;
  font-weight: 500;
  color: #969696;
`;