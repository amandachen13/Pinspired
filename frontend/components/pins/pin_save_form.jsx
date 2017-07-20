import React from 'react';
import { values } from 'lodash';
import { Link, withRouter } from 'react-router-dom';

class PinSaveForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.pin.title,
      url: this.props.pin.url,
      description: this.props.pin.description,
      image: this.props.pin.image_url,
      board_id: ""
    };
  }

  componentDidUpdate() {
    const pin = this.state;
    this.props.createPin(pin).then(() => this.props.close());
  }

  componentWillUnmount() {

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  boardList() {
    const boards = values(this.props.currentUser.boards);
    const boardNames = boards.map( board => {
      const boardId = board.id;
      return (
      <li key={boardId} className="pin-save-board">
        <div className="pin-save-board">{board.name}</div>
        <div onClick={ () => { this.setState({board_id: boardId}) } } className="pin-save-final">
          <i className="fa fa-thumb-tack" aria-hidden="true"></i>
          <div className="pin-save">Save</div>
        </div>
      </li>
      );
    });
    return boardNames;
  }

  render() {
    return(
      <div className="pin-save-form-container">
        <div className="pin-save-left">
          <img className="pin-save-form-image" src={this.props.pin.image_url} />
          <div className="pin-save-desc">
            <textarea
              className="pin-save-form-desc"
              id="Description"
              placeholder="Tell us about this Pin..."
              value={this.state.description}
              onChange={this.update('description')}
            />
            <label className="pin-save-form-edit-desc" htmlFor="Description">
              <i className="fa fa-pencil pin-save-form-edit-desc" aria-hidden="true"></i>
            </label>
          </div>
        </div>
        <div className="pin-save-right">
          <div className="pin-save-form-header">
            <div className="pin-save-form-title">Choose board</div>
            <div className="pin-save-exit">
              <i onClick={ () => this.props.close() } className="fa fa-times fa-lg" aria-hidden="true"></i>
            </div>
          </div>
          <ul>
            {this.boardList()}
          </ul>
        </div>
      </div>
    );
  }

}

export default withRouter(PinSaveForm);
