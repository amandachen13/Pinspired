import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("usernameError").innerHTML = "";
  }

  componentDidUpdate() {
    if (this.props.errors) {
      this.props.errors.forEach((err) => {
        if (err.substring(0,4) === "Pass") {
          document.getElementById("passwordError").innerHTML = err.substring(9);
        } else if (err.substring(0,4) === "User") {
          document.getElementById("usernameError").innerHTML = err.substring(9);
        }
      });
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
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

  demo() {
    this.props.demoLogin({user: {username:"pindiesel" , password:"pindiesel"} });
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="session-form-logo">
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-3x session-logo-circle" aria-hidden="true"></i>
            <i className="fa fa-cloud fa-stack-2x" aria-hidden="true"></i>
            <i className="fa fa-thumb-tack fa-stack-1x fa-inverse" aria-hidden="true"></i>
          </span>
        </div>
        <h3>{this.props.message}</h3>
        <br/>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form">
            <br/>
            <input type="text" placeholder="Username"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
            />
            <span id="usernameError"></span>
            <br/>
            <input type="password" placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
            <span id="passwordError"></span>
            <br/>
            <input className="submit-button" type="submit" value="Sign up" />
          </div>
        </form>
        <p className="or-option">OR</p>
        <button onClick={this.demo} className="demo">Demo</button>
        <div className="large-border" />
        <div className="session-option">
          <span className="login-option-message">Already a member?</span>
          <br/>
          <Link className="login-link" to='/login'>Log in</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
