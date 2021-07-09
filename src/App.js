import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import SingleProject from "./components/SingleProject";
import Project from "./components/Project";
import NavBar from "./components/NavBar";


function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SingleProject} path='/post/:slug' />
        <Route component={Project} path='/projects' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
