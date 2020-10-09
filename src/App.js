import React from 'react';
import Home from './pages/Home'
import Browse from './pages/Browse'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/browse">
        <Browse />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
    </Router>
  )
}



export default App;
