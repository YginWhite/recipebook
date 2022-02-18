import styled from 'styled-components';
import { device } from '../../../utils/media';

export const PrimaryFontStyle = styled.div`
	font-family: ${props => props.theme.fonts.main.family};
  font-weight: ${props => props.theme.fonts.main.weight.medium};
`;

export const SecondaryFontStyle = styled.div`
	font-family: ${props => props.theme.fonts.main.family};
  font-weight: ${props => props.theme.fonts.main.weight.regular};
`;

export const HeadingFontStyle = styled.div`
	font-family: ${props => props.theme.fonts.heading.family};
`;