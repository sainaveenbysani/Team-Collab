import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact';
import Login from './Components/LoginUser/LoginUser';
import Register from './Components/RegisterUser/RegisterUser';
import Dashboard from './Components/DashBoard/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

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
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
