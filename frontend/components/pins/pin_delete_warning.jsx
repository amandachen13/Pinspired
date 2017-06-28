import React from 'react';

class PinEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePin(this.props.pin.id);
    this.props.close();
    // this.props.history.history.goBack();
    // window.location.reload();
    // debugger;
    // this.props.requestSingleBoard(this.props.pin.board.id);
    debugger
    this.props.history.history.goBack();
    // this.props.history.history.push(`/${this.props.pin.creator.username}/${this.props.pin.board.name}`)
  }

  componentWillUnmount() {
    this.props.requestSingleBoard(this.props.pin.board.id);
  }

  render() {
    return(
      <div>
        <div>Are you sure?</div>
        <div>Once you delete a Pin, you can't undo it!</div>
        <button onClick={this.props.close}>Cancel</button>
        <button onClick={this.handleDelete}>Delete Pin</button>
      </div>
    );
  }

}

export default PinEditForm;
