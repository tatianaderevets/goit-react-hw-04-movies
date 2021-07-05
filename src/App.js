import './App.css';
import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loader from "react-loader-spinner"
// import HomePage from './pages/HomePage';
// import MoviesPage from './pages/MoviesPage';
// import MovieDetailsPage from './pages/MovieDetailsPage';
import Navigation from './components/Navigation';
import routes from './routes';


const HomePage = lazy(() => import('./pages/HomePage' /* webpackChunkName: "home-page" */))
const MoviesPage = lazy(() => import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */))
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage' /* webpackChunkName: "moviDetails-page" */))

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader type="Puff" color="#00BFFF" height={500} width={500} timeout={3000} />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.moviDetails} component={MovieDetailsPage} />
        </Switch>
        <Redirect to={{ pathname: "/" }} />
      </Suspense>

    </>
  );
}

export default App;
