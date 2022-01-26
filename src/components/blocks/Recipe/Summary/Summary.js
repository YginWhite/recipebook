import React from 'react';
import styled from 'styled-components';

const StyledSummary = styled.section`
	width: 451.05px;
  padding-top: 16.14px;
  margin-left: 11.42px;
`;

const Header = styled.header`
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
			<Header>
				<h3>{title}</h3>
			</Header>
			<Body dangerouslySetInnerHTML={createMarkup(summary)}></Body>
		</StyledSummary>
	);
};

function createMarkup(text) {
  return {__html: text};
}

export default Summary;