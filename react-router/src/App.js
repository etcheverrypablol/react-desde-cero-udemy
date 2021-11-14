import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import HomePage from './components/HomePage';
function App() {
  return (
    <Router>
      <div className='container mt-5'>
        <h1>React Router Class</h1>
        <hr />
        <Switch>
          <Route path='/contact' exact>
            <Contact />
          </Route>
        </Switch>
        <Switch>
          <Route path='/aboutUs' exact>
            <AboutUs />
          </Route>
        </Switch>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
