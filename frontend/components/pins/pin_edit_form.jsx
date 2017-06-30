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
    this.props.editPin(pin).then(() => this.props.requestSingleBoard(this.props.pin.board.id)).then(() => this.props.close());
    // if(this.props.errors.length === 0) {
    //   this.props.close();
    // }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  selected(name) {
    if (name === this.props.pin.board.name) {
      return "selected";
    } else {
      return "";
    }
  }

  selectBoard() {
    const boards = values(this.props.currentUser.boards);
    //debugger
    const options = boards.map( board => {
      return(
        <option key={board.id} selected={this.selected(board.name)} value={board.id}>{board.name}</option>
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
          <div className="pin-edit-board-mid">
            <div>
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
            </div>
            <div className="pin-edit-form-image">
              <img className="pin-edit-form-image" src={this.props.pin.image_url} />
            </div>
          </div>
          <div className="pin-edit-buttons">
            <div>
              <button className="pin" onClick={ () => this.props.open(<PinDeleteWarningContainer pin={this.props.pin} history={this.props.history} boardId={this.state.board_id}/>) }>Delete</button>
            </div>
            <div>
            <button className="pin" onClick={ () => this.props.close() }>Cancel</button>
            <input className="pin-edit-save" type="submit" value="Save" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PinEditForm;
