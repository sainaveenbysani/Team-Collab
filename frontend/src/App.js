import React , {useState , useCallback, useContext} from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact';
import Login from './Components/LoginUser/LoginUser';
import Register from './Components/RegisterUser/RegisterUser';
import Dashboard from './Components/DashBoard/Dashboard';
import { AuthContext } from './Shared/context/auth-context';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  let routes;

  if (isLoggedIn){
    routes=(
    <Switch>
    <Route path="/dashboard" exact>
      <Dashboard/>
    </Route>
    <Redirect to="/dashboard" />
    </Switch>);
  }
  else{
    routes=(   
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
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
      <header className="header">
          <nav>
            <ul>
            {isLoggedIn ? (
                  <li>
                    <button onClick={logout}>Logout</button>
                  </li>
                ): (
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
