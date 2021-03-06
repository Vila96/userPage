import './App.css';
import ShowData from "./Components/UserPersonal/ShowData";
import UserPublic from "./Components/UserPublic/UserPublic";
import Home from "./Components/Home/Home";

import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";

export function App() {

  return (
    
    <Router>

      <div>
        <h1>Coolmena</h1>
      </div>

      <div className="App"> 
        <div className="navContainer">
          <nav className="nav">
              <button className="navBtn">
                <Link to="/ShowData" style={{ textDecoration: 'none' }}>Profile</Link>
              </button>
              <button className="navBtn">
                <Link to="/UserPublic" style={{ textDecoration: 'none' }}>Public users</Link>
              </button>

              <button className="navBtn">
                <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
              </button>
          </nav>
        </div>
            
        <Switch>
          <Route path = "/ShowData" exact component = {ShowData}/>;
          <Route path = "/UserPublic" exact component = {UserPublic}/>;
          <Route path = "/" exact component = {Home}/>;

        </Switch>
      </div>
    </Router>


  );
}

export default App;
