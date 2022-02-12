import React from 'react';

import { StyledSummary, Header, Title, Body } from './Summary.styles';

const Summary = ({ title, summary }) => {
	return (
		<StyledSummary>
			<Header>
				<Title>{title}</Title>
			</Header>
			<Body dangerouslySetInnerHTML={createMarkup(summary)}></Body>
		</StyledSummary>
	);
};

function createMarkup(text) {
  return {__html: text};
}

export default Summary;