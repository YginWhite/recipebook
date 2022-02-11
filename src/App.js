import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from './views/HomePage/HomePage';
import { selectIsInitializedFlag, initializeApp } from './store/app/appSlice';
import { fetchMoreRecipes } from './store/recipes/recipesSlice';
import { changeDisplayedRecipesAmount, selectLoadedRecipesOver } from './store/pagination/paginationSlice';
import { useWindowSize } from './utils/hooks';
import { utils } from './utils/utils';
import { StyledApp, Page } from './App.styles';


function App() {
  const [width, height] = useWindowSize();
	const dispatch = useDispatch();
	const isInitialized = useSelector(selectIsInitializedFlag);
  const loadedRecipesIsOver = useSelector(selectLoadedRecipesOver);

	useEffect(() => {
		dispatch(initializeApp());
	}, []);

  useEffect(() => {
    const amount = utils.calcDisplayedRecipesAmount(width);
    dispatch(changeDisplayedRecipesAmount(amount));
  }, [width]);

  useEffect(() => {
    if (loadedRecipesIsOver) {
      //dispatch(fetchMoreRecipes());
    }
  }, [loadedRecipesIsOver]);

  return (
    <StyledApp>
      {isInitialized &&
      	<Page>
      		<HomePage/>
      	</Page>
      }
    </StyledApp>
  );
}

export default App;
