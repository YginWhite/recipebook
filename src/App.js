import React, { useEffect } from 'react';
import HomePage from './views/HomePage/HomePage';
import { fetchRecipes } from './store/recipes/recipesSlice';
import './App.css';

function App() {
	useEffect(() => {
		fetchRecipes();
	}, []);

  return (
    <>
      <HomePage/>
    </>
  );
}

export default App;
