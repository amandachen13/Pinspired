import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProfileFields extends React.Component {
  constructor(props) {
    super(props);
    this.saveAndContinue = this.saveAndContinue.bind(this);
  }

  // TODO: Show picture once image_url is entered?
  // What if image_url is invalid?

  saveAndContinue(e) {
    e.preventDefault();
    const data = {
      image_url: document.getElementById("image_url").value,
      description: document.getElementById("description").value
    };
    this.props.saveValues(data);
    this.props.handleSubmit(e);
  }

  render() {
    return (
      <div className="profile-form-container">
        <form onSubmit={this.saveAndContinue} className="profile-form-box">
          <span>Sign up to see more</span>
          <br/>
          <div className="profile-form">
            <br/>
            <input type="text" placeholder="Image URL" id="image_url"
              defaultValue={this.props.fieldValues.image_url}
              className="profile-input"
            />
            <br/>
            <textarea type="password" placeholder="Description" id="description"
              defaultValue={this.props.fieldValues.description}
              className="profile-input"
            />
            <br/>
            <input type="submit" value="Sign up" />
            <br/>
            <button onClick={ this.props.previousStep }>Back</button>
          </div>
        </form>
      </div>
    );
  }
}

// TODO: Add another input type? or button? to "Skip this step"

export default withRouter(ProfileFields);
