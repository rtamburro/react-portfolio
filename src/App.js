import React from "react";
import { browserHistory, Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import LeftNav from "./components/LeftNav";
import RightNav from "./components/RightNav";
import Contact from "./components/Contact";


function App() {
  return (
    <Router history={browserHistory}>
      <RightNav />
      <LeftNav />
      <NavBar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Project} path="/projects" />
          <Route component={Contact} path='/contact' />
        </Switch>
    </Router>
  )
}

export default App;
