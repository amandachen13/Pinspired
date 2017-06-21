import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AccountFields from './account_fields';
import ProfileFields from './profile_fields';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
    this.fieldValues = {
      username: '',
      password: '',
      image_url: '',
      description: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveValues = this.saveValues.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

  saveValues(fields) {
    this.fieldValues = Object.assign({}, this.fieldValues, fields)
  }

  nextStep() {
    this.setState({
      step : this.state.step + 1
    });
  }

  previousStep() {
    this.setState({
      step : this.state.step - 1
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  // update(field) {
  //   return e => this.setState({
  //     [field]: e.currentTarget.value
  //   });
  // }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.fieldValues;
    this.props.processForm({user});
  }

  // QUESTION: How can I check if username or password is valid
  // before making POST request (after step 1)

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
    switch(this.state.step) {
      case 1:
        return <AccountFields fieldValues={this.fieldValues}
          renderErrors={this.renderErrors}
          nextStep={this.nextStep}
          saveValues={this.saveValues} />
      case 2:
        return <ProfileFields fieldValues={this.fieldValues}
          handleSubmit={this.handleSubmit}
          previousStep={this.previousStep}
          saveValues={this.saveValues} />
    }
  }
}

export default withRouter(SignupForm);
