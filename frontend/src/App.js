import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact';
import Login from './Components/LoginUser/LoginUser';
import Register from './Components/RegisterUser/RegisterUser';
import Dashboard from './Components/DashBoard/Dashboard';
import { AuthContext } from './Shared/context/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Get the isLoggedIn value from localStorage if it exists, or set to false if it doesn't exist
    return JSON.parse(localStorage.getItem('isLoggedIn')) || false;
  });

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  useEffect(() => {
    // Save the isLoggedIn value to localStorage whenever it changes
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        <Redirect to="/dashboard" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout }}
    >
      <Router>
        <header className="header">
          <nav>
            <ul>
              {isLoggedIn ? (
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              ) : (
                <React.Fragment>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </nav>
        </header>
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
