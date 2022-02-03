import styled from 'styled-components';
import { device } from '../../../utils/media';

export const StyledRecipes = styled.section`
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Header = styled.header`
  h3 {
		font-size: 1.499em;
		color: #404040;
  }
`;

export const Items = styled.div`
	display: flex;
  gap: 3.035em;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;

  @media ${device.smallDevices} {
    width: 74%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1em;
  }

  @media ${device.landscapePhonesAndUp} {
    width: 74%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1em;
  }

  @media ${device.tabletsAndUp} {
    width: 80%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.2em;
  }
`;

export const Button = styled.button`
	height: 50px;
	width: 50px;
	border: 0px solid #FFFFFF;
  border-width: 1.69px 1.97px;
  border-radius: 25px;
  box-shadow: 0px 1.75848px 4.39621px rgba(0, 0, 0, 0.15);
  background-color: inherit;
  cursor: pointer;
  color: #969696;
  font-weight: 500;
  font-size: 0.944em;

  @media ${device.smallDevices} {
    height: 30px;
    width: 30px;
    border-radius: 15px;
  }

  @media ${device.landscapePhonesAndUp} {
    height: 36px;
    width: 36px;
    border-radius: 18px;
  }
`;