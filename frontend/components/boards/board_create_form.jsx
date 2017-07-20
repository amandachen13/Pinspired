import React from 'react';
import { merge, values } from 'lodash';
import { Link, withRouter } from 'react-router-dom';

class BoardCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
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
    const board = this.state;
    this.props.createBoard(board).then((res) => this.props.requestUser(res.board.creator.username)).then(() => this.props.close());
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    document.getElementById("nameError").innerHTML = "";
  }

  componentDidUpdate() {
    if (this.props.errors) {
      this.props.errors.forEach((err) => {
        switch(err.substring(0,4)) {
          case "Name":
            document.getElementById("nameError").innerHTML = err;
            break;
        }
      });
    }
  }

  render() {
    return (
      <div className="board-edit-form-container">
        <div className="board-edit-header">
          <div className="board-edit-header">Create board</div>
          <div className="board-edit-exit">
            <i onClick={ () => this.props.close() } className="fa fa-times fa-lg" aria-hidden="true"></i>
          </div>
        </div>
        <div className="board-edit-header-line"></div>
        <form onSubmit={this.handleCreate}>
          <div className="board-edit-name">
            <label className="board-edit-label" htmlFor="Name">Name</label>
            <span id="nameError"></span>
            <input type="text" id="Name"
              className="board-edit-name"
              placeholder='Like "Places to Go" or "Recipes to Make"'
              value={this.state.name}
              onChange={this.update('name')}
            />
          </div>
          <div className="board-edit-buttons">
            <div>
            </div>
            <div>
              <button className="board" onClick={ () => this.props.close() }>Cancel</button>
              <input className="board-create-submit" type="submit" value="Create" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(BoardCreateForm);
