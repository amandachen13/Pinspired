import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SignupFormContainer from './../signup_form/signup_form_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   username: '',
    //   password: ''
    // };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  //
  // update(field) {
  //   return e => this.setState({
  //     [field]: e.currentTarget.value
  //   });
  // }
  //
  // handleSubmit(e) {
  //   e.preventDefault();
  //   const user = this.state;
  //   this.props.processForm({user});
  // }
  //
  // renderErrors() {
  //   return(
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

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
        <div>
          <SignupFormContainer location="/" />
        </div>
      );
    }
  }
}

export default withRouter(Home);
