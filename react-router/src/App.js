import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import HomePage from './components/HomePage';
function App() {
  return (
    <Router>
      <div className='container mt-5'>
        <div className='btn-group'>
          <Link to='/' className='btn btn-dark'>
            Home
          </Link>
          <Link to='/aboutUs' className='btn btn-dark'>
            About Us
          </Link>
          <NavLink to='/contact' className='btn btn-dark' activeClassName='active'>
            Contact
          </NavLink>
        </div>
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
