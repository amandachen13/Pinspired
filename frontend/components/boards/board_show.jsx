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
    this.props.requestSingleBoard(this.props.boardId);
    this.props.requestAllPins();
  }

  ownBoard() {
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
    if (this.props.user && this.props.boards) {
      if (this.props.boards[this.props.boardId]) {
        const board = this.props.boards[this.props.boardId];
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
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

}

export default withRouter(BoardShow);
