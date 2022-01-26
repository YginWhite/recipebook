import React from 'react';
import styled from 'styled-components';

const StyledSummary = styled.section``;

const Header = styled.header`
  h3 {
  	margin: 0;
  	font-family: 'Arima Madurai', cursive;
  	font-style: normal;
		font-weight: 800;
		font-size: 23.9784px;
		line-height: 39px;
		color: #404040;
  }
`;

const Body = styled.div`
	width: 451.05px;
	font-family: 'Roboto', sans-serif;
  font-style: normal;
	font-weight: normal;
	font-size: 13.2078px;
	line-height: 16px;
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