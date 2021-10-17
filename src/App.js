import './App.css';
import './styles/fonts.css';

import React from "react";
import Navigation from './components/Navigation.js';
import Overview from './components/Overview.js';
import Why from './components/Why.js';
import Example from './components/Example.js';
import CreationGIF from './components/CreationGIF.js';
import CreateDirective from './components/CreateDirective.js';

function App() {
  return (
    <div className="App">
    
      <Navigation />
      <Overview />
      <Why />
      <Example />
      <CreationGIF />
      <CreateDirective />

    </div>
  );
}

export default App;
