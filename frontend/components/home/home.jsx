import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SignupFormContainer from './../signup_form/signup_form_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div className="header">
          <h1>Pinspired</h1>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div className="home-background">
          <SignupFormContainer location="/" />
        </div>
      );
    }
  }
}

export default withRouter(Home);
