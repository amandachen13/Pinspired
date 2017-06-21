import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SignupForm from './../signup_form/signup_form';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
          <span>Welcome to Pinspired</span>
          <br/>
          <div className="home-form-container">
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
                <input type="submit" value="Sign up" />
              </div>
            </form>
          </div>
          <div className="login-from-home">
            <Link to='/login'>Log in</Link>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Home);
