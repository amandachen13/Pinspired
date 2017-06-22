import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SignupFormContainer from './../signup_form/signup_form_container';
import HeaderContainer from './header_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div className="header">
          <HeaderContainer />
        </div>
      );
    } else {
      return (
        <div className="home-background">
          <SignupFormContainer location="/" />
          <footer><a className="signup-footer" href="https://github.com/amandachen13/Pinspired">Github</a></footer>
        </div>
      );
    }
  }
}

export default withRouter(Home);
