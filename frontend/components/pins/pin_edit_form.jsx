import React from 'react';

class PinEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.pin.id,
      title: this.props.pin.title,
      url: this.props.pin.url,
      description: this.props.pin.description,
      image: this.props.pin.image,
      board_id: this.props.pin.board.id
    };

  }

  render() {
    debugger
    return(
      <div>hello</div>
    );
  }
}

export default PinEditForm;
