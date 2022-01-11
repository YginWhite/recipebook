import React from 'react';

import Header from '../../components/layouts/Header/Header';
import Main from '../../components/layouts/Main/Main';
import Aside from '../../components/layouts/Aside/Aside';
import Footer from '../../components/layouts/Footer/Footer';

const HomePage = () => {
	return (
		<div className="home-page">
			<div>
				<Header/>
      	<Main/>
      	<Aside/>
      	<Footer/>
			</div>
		</div>
	);
};

export default HomePage;