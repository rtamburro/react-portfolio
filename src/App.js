import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import SingleProject from "./components/SingleProject";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import LeftNav from "./components/LeftNav";
import RightNav from "./components/RightNav";


function App() {
  return (
    <BrowserRouter>
    <LeftNav />
    <RightNav />
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
