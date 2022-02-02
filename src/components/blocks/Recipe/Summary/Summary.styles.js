import styled from 'styled-components';
import { device } from '../../../../utils/media';

export const StyledSummary = styled.section``;

export const Header = styled.header`
  h3 {
		font-size: 1.498em;
		color: #404040;

		@media ${device.smallDevices} {  
    	text-align: center;
    	margin-bottom: 0.5em;
    	line-height: 1.2;
  	}

    @media ${device.landscapePhonesAndUp} {  
      text-align: center;
      margin-bottom: 0.5em;
      line-height: 1.2;
    }
  }
`;

export const Body = styled.div`
	width: 451.05px;
	font-size: 0.825em;
	line-height: 1.211em;
	color: #404040;

	@media ${device.smallDevices} {  
    width: initial;
    font-size: 0.9em;
    line-height: 1.4em;
    text-align: justify;
  }

  @media ${device.landscapePhonesAndUp} {  
    width: initial;
    font-size: 0.9em;
    line-height: 1.4em;
    text-align: justify;
  }
`;