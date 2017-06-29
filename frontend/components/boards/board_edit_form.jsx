import React from 'react';
import { values } from 'lodash';
import BoardDeleteWarningContainer from './board_delete_warning_container';

class BoardEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.boards[this.props.boardId].id,
      name: this.props.boards[this.props.boardId].name,
      description: this.props.boards[this.props.boardId].description,
      user_id: this.props.currentUser.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const board = this.state;
    this.props.editBoard(board).then(() => this.props.close());
  }

  // componentWillReceiveProps() {
  //   if(this.props.errors.length === 0) {
  //     this.props.close();
  //   }
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    debugger
    const board = this.props.boards[this.props.boardId];
    return (
      <div className="board-edit-form-container">
        <div className="board-edit-header">
          <div className="board-edit-header">Edit your board</div>
          <span className="board-edit-prev-name">{board.name}</span>
          <div className="board-edit-exit">
            <i onClick={ () => this.props.close() } className="fa fa-times fa-lg" aria-hidden="true"></i>
          </div>
        </div>
        <div className="board-edit-header-line"></div>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <div className="board-edit-name">
            <label className="board-edit-label" htmlFor="Name">Name</label>
            <input type="text" id="Name"
              className="board-edit-name"
              placeholder='Like "Places to Go" or "Recipes to Make"'
              value={this.state.name}
              onChange={this.update('name')}
            />
          </div>
          <div className="board-edit-description">
            <label className="board-edit-label" htmlFor="Description">Description</label>
            <textarea id="Description"
              className="board-edit-description"
              placeholder="What's your board about?"
              value={this.state.description}
              onChange={this.update('description')}
            />
          </div>
          <div className="board-edit-buttons">
            <div>
              <button onClick={ () => this.props.open(<BoardDeleteWarningContainer boardId={this.props.boardId} history={this.props.history} />) } className="board">Delete board</button>
            </div>
            <div>
              <button className="board" onClick={ () => this.props.close() }>Cancel</button>
              <input className="board-edit-save" type="submit" value="Save" />
            </div>
          </div>


        </form>
      </div>
    );
  }

}

export default BoardEditForm;
