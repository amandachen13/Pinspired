import React from 'react';
import { values } from 'lodash';

class BoardEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.board.id,
      name: this.props.board.name,
      description: this.props.board.description,
      user_id: this.props.currentUser.id
    };
  }

  render() {
    return (
      <div>BOARD EDIT FORM HERE</div>
    );
  }

}

export default BoardEditForm;
