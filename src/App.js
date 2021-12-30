import "./App.css";
import "./styles/fonts.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// reference https://reactrouter.com/web/guides/quick-start for react-router

import Navigation from "./components/Navigation.js";
import Overview from "./components/Overview.js";
import Why from "./components/Why.js";
import Example from "./components/Example.js";
import CreationGIF from "./components/CreationGIF.js";
import CreateDirective from "./components/CreateDirective.js";
import Footer from "./components/Footer.js";
import Firstfold from "./components/Firstfold.js";

import Create from "./pages/Create.js";
import SurveyNavigation from "./components/SurveyNavigation";
//import JProgressDemo from "./components/JProgressDemo";
import JSurveyDemo from "./components/JSurveyDemo.jsx";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <h2>This is temporary here for easy access to different pages</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/create">
            <CreateForm />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Landing() {
  return (
    <div className="App">
      <Navigation />
      <Firstfold />
      <Overview />
      <Why />
      <Example />
      <CreationGIF />
      <CreateDirective />
      <Footer />
    </div>
  );
}

function CreateForm() {
  return (
    <div className="App">
      <SurveyNavigation />
      <JSurveyDemo />
      <Create />
    </div>
  );
}

function About() {
  return (
    <div className="App">
      <Navigation />
      <h2>Page saved for About Us</h2>
      <Footer />
    </div>
  );
}

export default App;
