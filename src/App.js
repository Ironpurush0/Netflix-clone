import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Jumbotron from './components/Jumbotron'

function App() {
  return (
    <div className="App">
      <Jumbotron />
    </div>
  );
}

export default App;
