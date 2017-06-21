import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';

class AccountFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.saveAndContinue = this.saveAndContinue.bind(this);
  }

  // QUESTION: In saveAndContinue function, how can I test if
  // input fields will pass validations BEFORE actually making
  // a POST request to the DB?
  // Need to know if username has been taken!
  // But can check length of password on the frontend

  saveAndContinue(e) {
    e.preventDefault();
    const data = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value
    };
    this.props.saveValues(data);
    this.props.nextStep();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // TODO: render errors next to each input field

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.saveAndContinue} className="signup-form-box">
          <span>Sign up to see more</span>
          <br/>
          {this.props.renderErrors()}
          <div className="signup-form">
            <br/>
            <input type="text" placeholder="Username" id="username"
              defaultValue={this.props.fieldValues.username}
              onChange={this.update('username')}
              className="signup-input"
            />
            <br/>
            <input type="password" placeholder="Password" id="password"
              defaultValue={this.props.fieldValues.password}
              onChange={this.update('password')}
              className="signup-input"
            />
            <br/>
            <input type="submit" value="Continue" />
          </div>
        </form>
        <span>Already a member?</span>
        <Link to='/login'>Log in</Link>
      </div>
    );
  }
}

export default withRouter(AccountFields);
