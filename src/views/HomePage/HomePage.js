import React from 'react';
import styled from 'styled-components';

import Header from '../../components/layouts/Header/Header';
import Main from '../../components/layouts/Main/Main';
import Aside from '../../components/layouts/Aside/Aside';
import Footer from '../../components/layouts/Footer/Footer';

const StyledHomePage = styled.div`
	box-sizing: border-box;
	padding: 9.48px  24.81px 33.22px 24.81px;
  border-style: solid;
  border-width: 6.71px 4.32px;
  border-color: #FFFFFF;
  border-radius: 20px;
  background-color: #F0F7FF;
`;

const HomePage = () => {
	return (
		<StyledHomePage>
			<Header/>
    	<Main/>
    	<Aside/>
    	<Footer/>
		</StyledHomePage>
	);
};

export default HomePage;