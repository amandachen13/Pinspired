import React from 'react';
import { merge, values } from 'lodash';

class PinCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      url: '',
      description: '',
      image: '',
      board_id: ''
    };

    this.handleCreate = this.handleCreate.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleCreate(e) {
    e.preventDefault();
    const pin = this.state;
    this.props.createPin(pin).then(() => this.props.close());
  }

  boardList() {
      const boards = values(this.props.currentUser.boards);
      const boardNames = boards.map( board => {
        const boardId = board.id;
        return (
        <li key={boardId} className="pin-save-board">
          <div className="pin-save-board">{board.name}</div>
          <div onClick={ () => this.props.createPin(merge(this.state, {board_id: boardId})).then(() => this.props.close()) } className="pin-save-final">
            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
            <div className="pin-save">Save</div>
          </div>
        </li>
        );
      });
      return boardNames;
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    document.getElementById("titleError").innerHTML = "";
    document.getElementById("imageError").innerHTML = "";
    document.getElementById("urlError").innerHTML = "";
  }

  componentDidUpdate() {
    if (this.props.errors) {
      this.props.errors.forEach((err) => {
        switch(err.substring(0,4)) {
          case "Titl":
            document.getElementById("titleError").innerHTML = err;
            break;
          case "Imag":
            document.getElementById("imageError").innerHTML = err;
            break;
          case "Url ":
            document.getElementById("urlError").innerHTML = err;
            break;
        }
      });
    }
  }

  render() {
    return(
      <div className="pin-edit-form-container">
        <div className="pin-edit-header">
          <div className="pin-edit-header">Create a Pin</div>
          <div className="pin-edit-exit">
            <i onClick={ () => this.props.close() } className="fa fa-times fa-lg" aria-hidden="true"></i>
          </div>
        </div>
        <div className="pin-edit-header-line"></div>
        <div className="pin-create-form-container">
          <div className="pin-create-left">
            <form className="pin-create-form">
              <div className="pin-create-error">
                <input type="text" placeholder="Title"
                  className="pin-create-input"
                  value={this.state.title}
                  onChange={this.update('title')}
                />
                <div id="titleError"></div>
              </div>
              <div className="pin-create-error">
                <input type="text" placeholder="Image URL"
                  className="pin-create-input"
                  value={this.state.image}
                  onChange={this.update('image')}
                />
                <div id="imageError"></div>
              </div>
              <div className="pin-create-error">
                <input type="text" placeholder="https://..."
                  className="pin-create-input"
                  value={this.state.url}
                  onChange={this.update('url')}
                />
                <div id="urlError"></div>
              </div>
              <textarea placeholder="Tell us about this Pin..."
                className="pin-create-text"
                value={this.state.description}
                onChange={this.update('description')}
              />
              <br/>
            </form>
          </div>
          <div className="pin-create-right">
            <div className="pin-create-choose-board">Choose board</div>
            <ul>
              {this.boardList()}
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

export default PinCreateForm;
