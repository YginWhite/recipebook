import styled from 'styled-components';
import { device } from '../../../utils/media';


export const Header = styled.header``;


export const FlexBody = styled.div`
	display: flex;
  flex-direction: column;

  @media ${device.tabletsAndUp} {
    flex-direction: row; 
    align-items: center;
  }

  @media ${device.desctops} {
    flex-direction: row; 
    align-items: center;
  }
`;


export const Footer = styled.div``;


export const StyledMain = styled.section`
  ${Header} {
    @media ${device.tabletsAndUp} {
      margin-left: 2em;
    }

    @media ${device.desctops} {
      margin-left: 3.709em;
    }
  }

  ${FlexBody} {
    margin-top: 1.249em;
    margin-left: 0.338em;
  }

  ${Footer} {
    margin-top: 1.484em;

    @media ${device.tabletsAndUp} {
      margin-left: 2em;
    }

    @media ${device.desctops} {
       margin-left: 3.709em;
    }
  }
`;
