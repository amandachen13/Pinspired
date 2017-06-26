import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form/login_form_container';
import SignupFormContainer from './signup_form/signup_form_container';
import HomeContainer from './home/home_container';
import BoardShowContainer from './boards/board_show_container';
import PinShowContainer from './pins/pin_show_container';
import { AuthRoute, ProtectedRoute } from './../util/route_util';


const App = () => (
  <div>
    <Route exact path="/" component={HomeContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/pin/:id" component={PinShowContainer} />
    <ProtectedRoute path="/:username/:boardName" component={BoardShowContainer} />
  </div>
);

export default App;
