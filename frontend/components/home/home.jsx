import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SignupFormContainer from './../signup_form/signup_form_container';
import HeaderContainer from './header_container';
import PinsIndexContainer from './../pins/pins_index_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div>
          <div className="header">
            <HeaderContainer />
          </div>
          <div className="pins-grid">
            <PinsIndexContainer history={this.props.history}/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="home-background">
          <SignupFormContainer location="/" />
          <div className="signup-footer"><a className="signup-footer" href="https://github.com/amandachen13/Pinspired">Github</a></div>
        </div>
      );
    }
  }
}

export default withRouter(Home);
