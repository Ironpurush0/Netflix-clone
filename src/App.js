import React from 'react';
import Home from './pages/Home'
import Browse from './pages/Browse'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import {IsRedirectUser, ProtectedRoute} from './helpers/routes'
import {useAuthListner} from './hooks/user-auth-listner'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => {
  const {user} = useAuthListner()
  console.log(user)

  return (
    <Router>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <ProtectedRoute exact user={user} path="/browse">
        <Browse />
      </ProtectedRoute>
        <IsRedirectUser exact path="/signin" user={user} loggedInPath="/browse">
          <Signin />
        </IsRedirectUser>
        <IsRedirectUser exact path="/signup" user={user} loggedInPath="/browse">
          <Signup />
        </IsRedirectUser>
      </Switch>
    </Router>
  )
}



export default App;
