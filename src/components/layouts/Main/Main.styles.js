import styled from 'styled-components';
import { device } from '../../../utils/media';

export const StyledMain = styled.section`
	.recipes {
		margin-top: 1.484em;
		margin-left: 3.709em;
	}
`;

export const Header = styled.header`
	nav {
		padding-left: 3.709em;

		@media ${device.smallDevices} {
    	padding-left: initial;
  	}
	}
`;

export const Body = styled.div`
	display: flex;
	align-items: center;
	padding-top: 1.249em;
	padding-left: 0.338em;

	@media ${device.smallDevices} {
    flex-direction: column; 
    align-items: initial;
  }
`;