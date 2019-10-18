import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {CookiesProvider} from 'react-cookie';

import About from '../../routes/about'
import Main from '../../routes/main'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <CookiesProvider>
        <div className="App">
            <div className="backimage">
                <Router>
                    <Switch>
                        <Route path="/" exact component={Main}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                </Router>
            </div>
        </div>
      </CookiesProvider>
  );
}


export default App;
