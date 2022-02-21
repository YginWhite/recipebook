import React from 'react';
import { StyledSummary, Header, Title, Body } from './Summary.styles';
import { HeadingFontStyle, SecondaryFontStyle } from '../../common/Fonts/Fonts.styled';

const Summary = ({ title, summary, children }) => {
	return (
		<StyledSummary>
			<Header>
				<Title>
					<HeadingFontStyle>{title}</HeadingFontStyle>
				</Title>
			</Header>
			{children}
			<Body>
				<SecondaryFontStyle dangerouslySetInnerHTML={createMarkup(summary)}></SecondaryFontStyle>
			</Body>
		</StyledSummary>
	);
};

function createMarkup(text) {
  return {__html: text};
}

export default Summary;