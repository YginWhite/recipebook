import React from 'react';
import styled from 'styled-components';

import Header from '../../components/layouts/Header/Header';
import Main from '../../components/layouts/Main/Main';
import Aside from '../../components/layouts/Aside/Aside';
import Footer from '../../components/layouts/Footer/Footer';

const StyledHomePage = styled.div`
	padding: 7px 5px;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: #FFFFFF;

  & > div {
  	border-radius: 20px;
  	background-color: #F0F7FF;
  }
`;

const HomePage = () => {
	return (
		<StyledHomePage>
			<div>
				<Header/>
      	<Main/>
      	<Aside/>
      	<Footer/>
			</div>
		</StyledHomePage>
	);
};

export default HomePage;