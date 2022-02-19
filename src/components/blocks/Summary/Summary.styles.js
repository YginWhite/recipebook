import styled from 'styled-components';
import { device } from '../../../utils/media';


export const StyledSummary = styled.section``;


export const Title = styled.h3`
  line-height: 1.2;
  font-size: 1.498em;
  text-align: center;
  color: #404040;

  @media ${device.tabletsAndUp} {  
    font-size: 1.2em;
    text-align: left;
  }

  @media ${device.desctops} {
    text-align: left;
    line-height: normal;
  }
`;


export const Header = styled.header`
  ${Title} {
    margin-bottom: 0.5em;

    @media ${device.desctops} {
      margin-bottom: 0;
    }
  }
`;


export const Body = styled.div`
  font-size: 0.9em;
  line-height: 1.4em;
	color: #404040;
  text-align: justify;

  @media ${device.tabletsAndUp} {  
    width: 451.05px;
    font-size: 0.825em;
    line-height: 1.211em;
    text-align: left;
  }

  @media ${device.desctops} {  
    width: 451.05px;
    font-size: 0.825em;
    line-height: 1.211em;
    text-align: left;
  }
`;