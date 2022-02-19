import React from 'react';
import Header from '../../components/layouts/Header/Header';
import Main from '../../components/layouts/Main/Home/Main';
import Aside from '../../components/layouts/Aside/Aside';
import Footer from '../../components/layouts/Footer/Footer';


const HomePage = () => {
	return (
		<>
			<Header/>
    	<Main/>
    	<Aside/>
    	<Footer/>
		</>
	);
};

export default HomePage;