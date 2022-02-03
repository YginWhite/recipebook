import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from './views/HomePage/HomePage';
import { selectIsInitializedFlag, initializeApp } from './store/app/appSlice';
import { changeDisplayedRecipesAmount } from './store/recipes/recipesSlice';
import { useWindowSize } from './utils/hooks';
import { utils } from './utils/utils';
import './App.css';

function App() {
  const [width, height] = useWindowSize();
	const dispatch = useDispatch();
	const isInitialized = useSelector(selectIsInitializedFlag);

	useEffect(() => {
		dispatch(initializeApp());
	}, []);

  useEffect(() => {
    const amount = utils.calcDisplayedRecipesAmount(width);
    dispatch(changeDisplayedRecipesAmount(amount));
  }, [width]);

  return (
    <>
      {isInitialized &&
      	<>
      		<HomePage/>
      	</>
      }
    </>
  );
}

export default App;
