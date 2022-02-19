import styled, { css } from 'styled-components';
import { device } from '../../../utils/media';
import { StyledBorder } from '../../common/Borders/Borders.styles';


export const StyledImage = styled(StyledBorder)`
  overflow: hidden;
  max-width: 556px;
  box-shadow: 0px 7px 20px -12px rgba(0,0,0,0.3);

  ${props => {
    return !props.simple
      ? css`
          @media ${device.tabletsAndUp} {
            width: 320px;
            height: 320px;
            border-radius: 229px;
            box-shadow: 0px 7px 40px -12px rgba(0,0,0,0.3);
          }

          @media ${device.desctops} {
            width: 420px;
            height: 420px;
            border-radius: 229px;
            box-shadow: 0px 7px 40px -12px rgba(0,0,0,0.3);
          }
        `
      : '';
  }}
`;


export const Img = styled.img`
  display: block;
  width: 100%;

  ${props => {
    return !props.simple
      ? css`
          @media ${device.tabletsAndUp} {
            height: 320px;
            width: initial;
            margin-left: -80px;
          }

          @media ${device.desctops} {
            height: 420px;
            width: initial;
            margin-left: -105px;
          }
        `
      : '';
  }}
`;


export const Container = styled.figure`
  ${props => {
    return !props.simple
      ? css`
          @media ${device.tabletsAndUp} {
            width: 320px;
            height: 320px;
          }

          @media ${device.desctops} {
            width: 420px;
            height: 420px;
          }
        `
      : '';
  }}
`;