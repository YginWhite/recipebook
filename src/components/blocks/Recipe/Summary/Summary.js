import React from 'react';
import styled from 'styled-components';

const StyledSummary = styled.div`
	width: 451.05px;
  padding-top: 16.14px;
  margin-left: 11.42px;
`;

const Header = styled.div`
	font-family: 'Arima Madurai', cursive;
  font-size: 23.98px;
`;

const Body = styled.div`
	font-family: 'Roboto', sans-serif;
  font-size: 13.21px;
  color: #404040;
`;

const Summary = ({ title, summary }) => {
	return (
		<StyledSummary>
			<Header>{title}</Header>
			<Body dangerouslySetInnerHTML={createMarkup(summary)}></Body>
		</StyledSummary>
	);
};

function createMarkup(text) {
  return {__html: text};
}

export default Summary;