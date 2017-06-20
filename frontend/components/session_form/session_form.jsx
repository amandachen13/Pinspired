import React from 'react';
import SessionFormOption from './session_form_option';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // add IF for signing up - continue button shows form for more info
    // Can I save username and password locally and not make post request yet?
    // ask for image url and description before making post request
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return (<SessionFormOption
        message={"Not on Pinspired yet?"}
        formType={"signup"}
        linkText={"Sign Up"}
      />);
    } else if (this.props.formType === 'signup') {
      return (<SessionFormOption
        message={"Already a member?"}
        formType={"login"}
        linkText={"Log In"}
      />);
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  message() {
    if (this.props.formType === 'login') {
      return "Log in to see more";
    } else {
      return "Sign up to see more";
    }
  }

  submitText() {
    if (this.props.formType === 'login') {
      return "Log in";
    } else {
      return "Continue";
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.message()}
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input type="submit" value={this.submitText()} />
          </div>
        </form>
        {this.navLink()}
      </div>
    );
  }
}

export default withRouter(SessionForm);
