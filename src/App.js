import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage';
import RecipePage from './views/RecipePage/RecipePage';
import LoginPage from './views/LoginPage/LoginPage';
import { selectIsInitializedFlag, initializeApp } from './store/app/appSlice';
import { fetchRecipes, selectSearchQuery } from './store/recipes/recipesSlice';
import { changeDisplayedRecipesAmount, selectLoadedRecipesOver } from './store/pagination/paginationSlice';
import { useWindowSize } from './utils/hooks';
import { utils } from './utils/utils';
import { StyledApp, Page } from './App.styles';
import { PrimaryFontStyle } from './components/common/Fonts/Fonts.styled';


function App() {
  const [width, height] = useWindowSize();
	const dispatch = useDispatch();
	const isInitialized = useSelector(selectIsInitializedFlag);
  const loadedRecipesIsOver = useSelector(selectLoadedRecipesOver);
  const searchQuery = useSelector(selectSearchQuery);

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
      //dispatch(fetchRecipes());
    }
  }, [loadedRecipesIsOver]);

  useEffect(() => {
    //dispatch(fetchRecipes(true));
  }, [searchQuery]);

  return (
    <StyledApp>
      {isInitialized &&
        <Page borderType='page'>
          <PrimaryFontStyle>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='recipe' element={<RecipePage />} />
              <Route path='login' element={<LoginPage />} />
            </Routes>
          </PrimaryFontStyle>
        </Page>
      }
    </StyledApp>
  );
}

export default App;
