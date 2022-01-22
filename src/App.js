import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from './views/HomePage/HomePage';
import { selectIsInitializedFlag, initializeApp } from './store/app/appSlice';
import './App.css';

function App() {
	const dispatch = useDispatch();
	const isInitialized = useSelector(selectIsInitializedFlag);

	useEffect(() => {
		dispatch(initializeApp());
	}, []);

  return (
    <div>
      {isInitialized &&
      	<div>
      		<HomePage/>
      	</div>
      }
    </div>
  );
}

export default App;
