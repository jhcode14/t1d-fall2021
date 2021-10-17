import './App.css';

import React from "react";
import Navigation from './components/Navigation.js';
import Overview from './components/Overview.js';
import Why from './components/Why.js';
import Example from './components/Example.js';
import CreationGIF from './components/CreationGIF.js';
import CreateDirective from './components/CreateDirective.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
    
      <Navigation />
      <Overview />
      <Why />
      <Example />
      <CreationGIF />
      <CreateDirective />
      <Footer />
      
    </div>
  );
}

export default App;
