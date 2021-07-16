import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
    <BrowserRouter>
    <LeftNav />
    <RightNav />
    <NavBar />
      <Switch>
        <Route component={Home} path='/react-portfolio' exact />
        <Route component={About} path='/about' />
        <Route component={Project} path='/projects' />
        <Route component={Contact} path='/contact' />
        <Route path="/" exact>
          <Redirect to="/react-portfolio" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
