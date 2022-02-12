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
  gap: 1em;
  justify-content: center;
  flex-wrap: wrap;
  width: 74%;

  @media ${device.tabletsAndUp} {
    width: 80%;
    gap: 1.2em;
  }

  @media ${device.desctops} {
    width: 90%;
    gap: 3.035em;
  }
`;