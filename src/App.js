import React from 'react';

import Header from './components/layouts/Header/Header';
import Main from './components/layouts/Main/Main';
import Aside from './components/layouts/Aside/Aside';
import Footer from './components/layouts/Footer/Footer';

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Aside/>
      <Footer/>
    </div>
  );
}

export default App;
