import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/theme';  
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

  // this effect will be called second due to loadRecipes is async
	useEffect(() => {
		dispatch(initializeApp());
	}, []);

  // this effect will be called first
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
    <ThemeProvider theme={theme}>
      <StyledApp>
        {isInitialized &&
          <Page borderType='page'>
            <HomePage/>
          </Page>
        }
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
