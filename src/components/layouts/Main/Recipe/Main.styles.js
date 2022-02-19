import styled from 'styled-components';
import { device } from '../../../../utils/media';
import { Body } from '../../../blocks/Summary/Summary.styles';
import { StyledImage } from '../../../blocks/Image/Image.styles';

export const StyledMain = styled.div`
	${StyledImage} {
		margin-top: 1em;
  	margin-bottom: 1em;
	}

	${Body} {
		@media ${device.tabletsAndUp} {
			display: flex;
			align-items: center;
			gap: 1.5em;
    	width: initial;

    	& > * {
    		width: 50%;
    	}
  	}

  	@media ${device.desctops} {
  		display: flex;
  		align-items: center;
  		gap: 1.5em;
    	width: initial;

    	& > * {
    		width: 50%;
    	}
  	}
	}
`;