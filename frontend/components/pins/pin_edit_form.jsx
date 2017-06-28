import React from 'react';
import { values } from 'lodash';
import PinDeleteWarningContainer from './pin_delete_warning_container';

class PinEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.pin.id,
      title: this.props.pin.title,
      url: this.props.pin.url,
      description: this.props.pin.description,
      image: this.props.pin.image_url,
      board_id: this.props.pin.board.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const pin = this.state;
    this.props.editPin(pin);
    if(this.props.errors.length === 0) {
      this.props.close();
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  selectBoard() {
    const boards = this.props.currentUser.boards;
    const boardNames = Object.keys(boards);
    const options = boardNames.map( (board, idx) => {
      return(
        <option key={idx} value={boards[board]}>{board}</option>
      );
    });

    return options;
  }

  render() {
    return(
      <div className="pin-edit-form-container">
        <div className="pin-edit-header">
          <div className="pin-edit-header">Edit this Pin</div>
          <div className="pin-edit-exit">
            <i onClick={ () => this.props.close() } className="fa fa-times fa-lg" aria-hidden="true"></i>
          </div>
        </div>
        <div className="pin-edit-header-line"></div>
        <form onSubmit={this.handleSubmit}>
          <div className="pin-edit-board">
            <label className="pin-edit-label" htmlFor="Board">Board</label>
            <select className="pin-edit-selector" id="Board" onChange={this.update('board_id')}>
              {this.selectBoard()}
            </select>
          </div>
          <div className="pin-edit-description">
            <label className="pin-edit-label" htmlFor="Description">Description</label>
            <textarea
              className="pin-edit-description"
              id="Description"
              placeholder="Tell us about this Pin..."
              value={this.state.description}
              onChange={this.update('description')}
            />
          </div>
          <div>Delete</div>
          <button onClick={ () => this.props.open(<PinDeleteWarningContainer pin={this.props.pin} history={this.props.history}/>) }>Delete</button>
          <button onClick={ () => this.props.close() }>Cancel</button>
          <input type="submit" value="Save" />
          <br/>

        </form>
        <div className="pin-edit-form-image">
          <img className="pin-edit-form-image" src={this.props.pin.image_url} />
        </div>
      </div>
    );
  }
}

export default PinEditForm;
