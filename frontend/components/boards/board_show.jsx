import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import HeaderContainer from './../home/header_container';
import Masonry from 'react-masonry-component';
import { values } from 'lodash';
import BoardPinsIndexContainer from './board_pins_index_container';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);

    this.ownBoard = this.ownBoard.bind(this);
    this.pinsCount = this.pinsCount.bind(this);
  }

  componentDidMount() {
    // users has boards key ...
    // need to request user first?
    // this.props.requestUser(username);
    // if user, then user.boards. find id pointing to boardName
    this.props.requestUser(this.props.username);
    // this.props.requestSingleBoard(__________);
  }

  shouldComponentUpdate(nextProps) {
    // debugger
    // const boardId = nextProps.user.boards[this.props.boardName];
    // this.props.requestSingleBoard(boardId);
    const boardId = nextProps.user.boards[this.props.boardName];
    // debugger
    if (this.props.boards[boardId]) {
      return false;
    } else {
      return true;
    }
  }

  componentWillUpdate(nextProps) {
    // debugger
    const boardId = nextProps.user.boards[this.props.boardName];
    this.props.requestSingleBoard(boardId);
  }

  // componentWillReceiveProps(nextProps) {
  //   debugger
  //   const boardId = nextProps.user.boards[this.props.boardName];
  //   this.props.requestSingleBoard(boardId);
  // }

  ownBoard() {
    if (this.props.currentUser.username === this.props.username) {
      return (
        <div className="board-options">
          EDIT DELETE
        </div>
      );
    } else {
      return (
        <div className="board-options">
        </div>
      );
    }
  }

  pinsCount(board) {
    return (
      <div className="pins-count">
        <span className="pins-count-bold">{board.pins.length}</span>
        <span> Pins</span>
      </div>
    )
  }

  render() {
    if (this.props.user) {
      const boardId = this.props.user.boards[this.props.boardName];
      if (this.props.boards[boardId]) {
        const board = this.props.boards[boardId];
        return (
          <div className="board-show-container">
            <HeaderContainer />
            {this.ownBoard()}
            <h1 className="board-show-title">{board.name}</h1>
            <div className="board-info">
              <div className="board-info-left">
                {this.pinsCount(board)}
                <div className="board-description">{board.description}</div>
              </div>
              <div className="board-info-right">
                <Link to={`/${this.props.username}`}>
                  <img className="board-creator-pic" src={this.props.user.image_url} />
                </Link>
              </div>
            </div>
            <div className="pins-grid">
              <BoardPinsIndexContainer board={board} />
            </div>
          </div>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

}

export default withRouter(BoardShow);
