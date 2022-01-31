import styled from 'styled-components';

export const StyledRecipeSmall = styled.div`
	position: relative;
  width: 142.44px;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Image = styled.figure`
  box-sizing: border-box;
	position: absolute;
  top: 0;
  left: 22.66px;
  margin: 0;
  width: 94.04px;
  height: 94.96px;
  box-shadow: 0px 1.75848px 4.39621px rgba(0, 0, 0, 0.15);
  border: 2px solid white;
  border-radius: 50px;
  overflow: hidden;

  img {
  	height: 94.96px;
  }
`;

export const Content = styled.div`
  box-sizing: border-box;
  height: 160px;
  border: 0px solid #FFFFFF;
  border-width: 1.69px 1.97px;
  border-radius: 7.03px;
  box-shadow: 0px 1.75848px 4.39621px rgba(0, 0, 0, 0.15);

  h4 {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 0.944em;
    line-height: 1.192;
    color: #000000;
    text-align: center;
  }

  div {
    height: 90px;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    header {
      height: 56px;
      display: flex;
      align-items: center;
    }
  }
  
  p {
    margin: 0;
    padding: 0;
    margin-bottom: 19px;
    font-size: 0.809em;
    line-height: 1.158;
    color: #969696;
    text-align: center;
  }
`;