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
      <div>EDIT FORM HERE</div>
    );
  }
}

export default UserProfileEdit;
