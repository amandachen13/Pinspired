import { connect } from 'react-redux';
import BoardShow from './board_show';
import { requestSingleBoard } from './../../actions/board_actions';
import { requestUser } from './../../actions/user_actions';
import { requestAllPins } from './../../actions/pin_actions';
import { open } from './../../actions/modal_actions';

const mapStateToProps = ({ session, users, boards, pins }, { match }) => {
  const boardId = match.params.id;
  const username = match.params.username;
  return {
    currentUser: session.currentUser,
    username,
    user: users[username],
    boardId,
    // board: boards.boards[boardId],
    boards: boards.boards
  }
};

const mapDispatchToProps = dispatch => {
  return {
    requestSingleBoard: id => dispatch(requestSingleBoard(id)),
    requestUser: username => dispatch(requestUser(username)),
    requestAllPins: () => dispatch(requestAllPins()),
    open: component => dispatch(open(component))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardShow);
