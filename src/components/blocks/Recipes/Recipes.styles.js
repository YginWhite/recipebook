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