import styled from 'styled-components';

export const Header = styled.header`
  h4 {
    font-size: 1.214em;
		color: #969696;
  }
`;

export const Body = styled.div`
	font-size: 0.9em;
	color: #404040;
`;

export const StyledInstructions = styled.section`
	${Header} {
		margin-bottom: 0.5em;
	}

	ol {
		margin-left: 1.1em;

		li {
			padding: 0.3em;
		}
	}
`;