import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BoardDeleteWarning extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteBoard(this.props.boardId).then(() => this.props.requestUser(this.props.currentUser.username)).then(() => this.props.close());
    // window.location.reload();
    // debugger;
    // this.props.requestSingleBoard(this.props.pin.board.id);
    debugger
    this.props.history.push(`/${this.props.currentUser.username}`)
    // this.props.history.history.goBack();
    // window.location.reload();
    // this.props.history.history.push(`/${this.props.pin.creator.username}/${this.props.pin.board.name}`)
  }

  // componentWillUnmount() {
  //   this.props.requestSingleBoard(this.props.pin.board.id);
  // }

  render() {
    return(
      <div className="pin-delete-container">
        <div className="pin-delete-header">
          <div className="pin-edit-header">Are you sure?</div>
          <div className="pin-delete-exit">
            <i onClick={ () => this.props.close() } className="fa fa-times fa-lg" aria-hidden="true"></i>
          </div>
        </div>
        <div className="pin-delete-warning">Once you delete a board and all its Pins, you can't undo it!</div>
        <div className="pin-delete-buttons">
          <button className="pin" onClick={this.props.close}>Cancel</button>
          <button className="delete" onClick={this.handleDelete}>Delete board</button>
        </div>
      </div>
    );
  }

}

export default withRouter(BoardDeleteWarning);
