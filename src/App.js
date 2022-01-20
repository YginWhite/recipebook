import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HomePage from './views/HomePage/HomePage';
import { fetchRecipes } from './store/recipes/recipesSlice';
import './App.css';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchRecipes());
	}, []);

  return (
    <>
      <HomePage/>
    </>
  );
}

export default App;
