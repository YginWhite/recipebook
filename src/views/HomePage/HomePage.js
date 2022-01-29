import React from 'react';

import Header from '../../components/layouts/Header/Header';
import Main from '../../components/layouts/Main/Main';
import Aside from '../../components/layouts/Aside/Aside';
import Footer from '../../components/layouts/Footer/Footer';

import { StyledHomePage } from './HomePage.styles';

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