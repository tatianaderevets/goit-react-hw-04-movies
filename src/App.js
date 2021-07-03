// import logo from './logo.svg';
import './App.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <ul>
        <li><NavLink
          exact
          to='/' className="NavLink"
          activeClassName="NavLink--active">
          Home
        </NavLink>
        </li>
        <li><NavLink to='/movies'
          className="NavLink"
          activeClassName="NavLink--active">
          Movies
        </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies" component={MoviesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default App;
