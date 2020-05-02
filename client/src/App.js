import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import NavBar from './components/NavBar';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Portfolio from './pages/Portfolio';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="content">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/portfolio" component={Portfolio}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
