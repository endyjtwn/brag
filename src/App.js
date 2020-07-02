import React from 'react';
import './App.scss';
import Main from './Main/Main';
import Shop from './Shop/Shop';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Main />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </Switch>
      </Router >
    </div >
  );
}

export default App;
