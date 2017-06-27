import React from 'react';
import { values } from 'lodash';

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
        <div className="pin-edit-header">Edit this Pin</div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="Board">Board</label>
            <select id="Board" onChange={this.update('board_id')}>
              {this.selectBoard()}
            </select>
            <br/>
            <label htmlFor="Description">Description</label>
            <textarea
              id="Description"
              value={this.state.description}
              onChange={this.update('description')}
            />
            <br/>
            <button onClick={ () => this.props.close() }>Cancel</button>
            <input type="submit" value="Save" />
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </form>
        <div className="pin-edit-form-image">
          <img className="pin-edit-form-image" src={this.props.pin.image_url} />
        </div>
      </div>
    );
  }
}

export default PinEditForm;
