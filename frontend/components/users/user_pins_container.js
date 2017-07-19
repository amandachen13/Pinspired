import { connect } from 'react-redux';
import UserPins from './user_pins';
import { requestUser } from './../../actions/user_actions';
import { requestAllPins } from './../../actions/pin_actions';
import { open } from './../../actions/modal_actions';

const mapStateToProps = ({ session, users, boards, pins }, { match }) => {
  const username = match.params.username;
  return {
    currentUser: session.currentUser,
    username,
    user: users[username],
    boards: boards.boards,
    pins: pins.pins
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
)(UserPins);
