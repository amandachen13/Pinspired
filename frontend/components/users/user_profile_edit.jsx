import React from 'react';

class UserProfileEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.user.id,
      description: this.props.user.description
    };
  }

  render() {
    return(
      <div>
        <div className="user-edit-header">
          <div className="user-edit-header">Profile</div>
          <div className="user-edit-exit">
            <i onClick={ () => this.props.close() } className="fa fa-times fa-lg" aria-hidden="true"></i>
          </div>
        </div>
        <form>
          <div>
            Picture & change picture
          </div>
          <div>
            <label htmlFor="Description">About you</label>
            <textarea
              id="Description"
            />
          </div>
          <div>
            <button>Cancel</button>
            <input type="submit" value="Save" />
          </div>
        </form>
      </div>
    );
  }
}

export default UserProfileEdit;
