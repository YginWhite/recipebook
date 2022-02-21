import styled from 'styled-components';
import { device } from '../../../../utils/media';
import { StyledBorder } from '../../../common/Borders/Borders.styles';

export const StyledNutrient = styled(StyledBorder)`
  width: 50px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 1.75848px 4.39621px rgba(0, 0, 0, 0.15);

  @media ${device.landscapePhonesAndUp} {
    width: 70.14px;
    height: 80.93px;
  }

  @media ${device.tabletsAndUp} {
    width: 70.14px;
    height: 80.93px;
  }

  @media ${device.desctops} {
    width: 70.14px;
    height: 80.93px;
  }
`;

export const Value = styled.div`
  font-size: 1.214em;
  font-weight: 500;
  color: #000000;
`;

export const Name = styled.header`
  text-align: center;
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