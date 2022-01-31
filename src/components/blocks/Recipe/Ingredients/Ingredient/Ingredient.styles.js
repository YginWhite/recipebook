import styled from 'styled-components';

export const StyledIngredient = styled.div`
	width: 139.8px;
	height: 39.57px;
  display: flex;
`;

export const Image = styled.figure`
	box-sizing: border-box;
	width: 49.39px;
	margin: 0; 
	padding: 5.65px 10.91px 6.35px 10.87px;
	border-style: solid;
  border-width: 0.51px 0.68px;
  border-color: #FFFFFF;
  border-radius: 7.03px;
  box-shadow: 0px 1.75848px 4.39621px rgba(0, 0, 0, 0.15);

  img {
  	width: 26.42px;
  	height: 26.37px;
  }
`;

export const Description = styled.div`
	padding-left: 6px;
	padding-top: 6px;

	h5 {
		font-size: 0.659em;
		line-height: 1.137;
		color: #404040;
	}

	& div:last-child {
		margin-top: 5px;
		font-size: 0.507em;
		line-height: 1.230;
		font-weight: 500;
		color: #969696;
	}
`;