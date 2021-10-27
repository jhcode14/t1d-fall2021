import "./App.css";
import "./styles/fonts.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navigation from "./components/Navigation.js";
import Overview from "./components/Overview.js";
import Why from "./components/Why.js";
import Example from "./components/Example.js";
import CreationGIF from "./components/CreationGIF.js";
import CreateDirective from "./components/CreateDirective.js";
import Footer from "./components/Footer.js";
import Firstfold from "./components/Firstfold.js";

import Create from "./pages/Create.js";

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
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
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

function Users() {
  return (
    <div className="App">
      <Navigation />
      <Create />
      <Footer />
    </div>
  );
}

function About() {
  return <h2>Page saved for About Us</h2>;
}

export default App;
