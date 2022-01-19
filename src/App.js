import "./App.css";
import "antd/dist/antd.css";
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

import SurveyNavigation from "./components/SurveyNavigation";
import DocCreation from "./components/survey/DocCreation.jsx";

function App() {
  return (
    <Router>
      <div>
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
      <Why />
      <Overview />
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
      <DocCreation />
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
