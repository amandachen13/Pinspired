import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PinDeleteWarning extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePin(this.props.pin.id).then(() => this.props.close()).then(() => this.props.history.goBack());
  }

  componentWillUnmount() {
    this.props.requestSingleBoard(this.props.pin.board.id);
  }

  render() {
    return(
      <div className="pin-delete-container">
        <div className="pin-delete-header">
          <div className="pin-edit-header">Are you sure?</div>
          <div className="pin-delete-exit">
            <i onClick={ () => this.props.close() } className="fa fa-times fa-lg" aria-hidden="true"></i>
          </div>
        </div>
        <div className="pin-delete-warning">Once you delete a Pin, you can't undo it!</div>
        <div className="pin-delete-buttons">
          <button className="pin" onClick={this.props.close}>Cancel</button>
          <button className="delete" onClick={this.handleDelete}>Delete Pin</button>
        </div>
      </div>
    );
  }

}

export default withRouter(PinDeleteWarning);
