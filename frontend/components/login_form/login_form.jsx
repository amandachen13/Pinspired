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
  }

  componentWillReceiveProps(nextProps) {
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
      <div className="login-form-background">
        <div className="login-form-container">
          <h3>Log in to see more</h3>
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
              <input className="submit-button" type="submit" value="Log in" />
            </div>
          </form>
          <div className="session-option">
            <span>Not on Pinspired yet?</span>
            <Link to='/signup'>Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
