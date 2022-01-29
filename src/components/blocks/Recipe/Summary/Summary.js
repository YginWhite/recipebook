import React from 'react';

import { StyledSummary, Header, Body } from './Summary.styles';

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