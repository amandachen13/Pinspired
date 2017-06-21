import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form/login_form_container';
import SignupFormContainer from './signup_form/signup_form_container';
import HomeContainer from './home/home_container';
import { AuthRoute } from './../util/route_util';


const App = () => (
  <div>
    <Route exact path="/" component={HomeContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
