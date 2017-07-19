import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
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
  }

  componentDidUpdate() {
    if (this.props.errors) {
      this.props.errors.forEach((err) => {
        if (err.substring(0,4) === "Oops") {
          document.getElementById("combinationError").innerHTML = err;
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
        <h3>Log in to see more</h3>
        <br/>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form">
            <br/>
            <input type="text" placeholder="Username"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
            />
            <span id="combinationError"></span>
            <br/>
            <input type="password" placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
            <br/>
            <input className="submit-button" type="submit" value="Log in" />
          </div>
        </form>
        <p className="or-option">OR</p>
        <button onClick={this.demo} className="demo">Demo</button>
        <div className="small-border" />
        <div className="session-option">
          <span className="signup-option-message">Not Pinspired yet?</span>
          <Link className="signup-link" to='/signup'>Sign Up</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
