import logo from './logo.svg';
import './App.css';
import './styles/fonts.css';

import React from "react";
import Navigation from './components/Navigation.js';
import Overview from './components/Overview.js';
import Why from './components/Why.js';


function App() {
  return (
    <div className="App">
    
      <Navigation />
      <Overview />
      <Why />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
