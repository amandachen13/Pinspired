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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
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

  render() {
    return (
      <div className="login-form-container">
        <h3>{this.props.message}</h3>
        <br/>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <input type="text" placeholder="Username"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
            />
            <br/>
            <input type="password" placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
            <br/>
            <input className="submit-button" type="submit" value="Sign up" />
          </div>
        </form>
        <p className="or-option">OR</p>
        <button className="demo">Demo</button>
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
