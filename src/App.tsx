import React, { Fragment } from 'react';
import './App.css';
import { StoreProvider } from "./context/Store"
import { Switch, Route } from 'react-router-dom';
import HomePage from "./components/HomePage"
import MovieDetail from './components/MovieDetail';
function App() {
  return (
    <Fragment>
      <StoreProvider>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/detail" exact component={MovieDetail}/>
        </Switch>
      </StoreProvider>
    </Fragment>
  );
}

export default App;
