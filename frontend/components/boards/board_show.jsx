import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import HeaderContainer from './../home/header_container';
import Masonry from 'react-masonry-component';
import { values } from 'lodash';
import BoardPinsIndexContainer from './board_pins_index_container';
import BoardEditFormContainer from './board_edit_form_container';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);

    this.ownBoard = this.ownBoard.bind(this);
    this.pinsCount = this.pinsCount.bind(this);
  }

  componentDidMount() {
    // debugger;
    // users has boards key ...
    // need to request user first?
    // this.props.requestUser(username);
    // if user, then user.boards. find id pointing to boardName
    debugger
    this.props.requestSingleBoard(this.props.boardId);
    // this.props.requestUser(this.props.username);
    // this.props.requestSingleBoard(__________);
  }

  // componentWillMount() {
    // debugger;
    // debugger;
    // this.props.requestSingleBoard(this.props.boardId);
  // }

  // shouldComponentUpdate(nextProps) {
    // debugger;
    // debugger
    // const boardId = nextProps.user.boards[this.props.boardName];
    // this.props.requestSingleBoard(boardId);
    // const boardId = nextProps.user.boards[this.props.boardName];
    // debugger
    // if (this.props.board) {
      // debugger
      // this.props.requestSingleBoard(boardId);
    //   return false;
    // } else {
    //   return true;
    // }
  // }

  // forceUpdate() {

  // }

  componentDidUpdate(prevProps, prevState) {
    // debugger
    // this.props.requestSingleBoard(this.props.boardId);

  }

  componentWillUpdate(nextProps) {
    // debugger

  }

  // componentDidUpdate(nextProps) {
  //   const boardId = nextProps.user.boards[this.props.boardName];
  //   this.props.requestSingleBoard(boardId);
  // }

  componentWillReceiveProps(nextProps) {

  debugger;
  }

  // componentWillReceiveProps(nextProps) {
    // window.location.reload();
  // }

  // componentWillReceiveProps(nextProps) {
  //   debugger
  //   const boardId = nextProps.user.boards[this.props.boardName];
  //   this.props.requestSingleBoard(boardId);
  // }

  ownBoard() {
    // const boardId = this.props.user.boards[this.props.boardName];

    if (this.props.currentUser.username === this.props.username) {
      return (
        <div className="board-options">
          <div onClick={ () => this.props.open(<BoardEditFormContainer boardId={this.props.boardId} />) } className="board-edit">
            <i className="fa fa-pencil fa-2x fa-pencil-board" aria-hidden="true"></i>
          </div>
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
    // debugger
    // if (this.props.user) {
    //   debugger;
    debugger
      // const boardId = this.props.user.boards[this.props.boardName];
      if (this.props.board) {
        debugger;
        const board = this.props.board;
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
              <BoardPinsIndexContainer board={board} boardPinsArr={board.pins} />
            </div>
          </div>
        );
      // } else {
      //   // debugger
      //   return null;
      // }
    } else {
      // debugger
      return null;
    }
  }

}

export default withRouter(BoardShow);
