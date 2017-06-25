import { connect } from 'react-redux';
import BoardShow from './board_show';
import { requestSingleBoard } from './../../actions/board_actions';
import { requestUser } from './../../actions/user_actions';

const mapStateToProps = ({ session, users, boards, pins }, { match }) => {
  const boardName = match.params.boardName;
  const username = match.params.username;
  return {
    currentUser: session.currentUser,
    username,
    user: users[username],
    boardName,
    boards: boards.boards
  }
};

const mapDispatchToProps = dispatch => {
  return {
    requestSingleBoard: id => dispatch(requestSingleBoard(id)),
    requestUser: username => dispatch(requestUser(username))

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardShow);
