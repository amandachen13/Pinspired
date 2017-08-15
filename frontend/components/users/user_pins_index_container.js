import { connect } from 'react-redux';
import UserPinsIndex from './user_pins_index';
import { requestAllPins } from './../../actions/pin_actions';
import { requestUser } from './../../actions/user_actions';
import { open } from './../../actions/modal_actions';

const mapStateToProps = ({ session, users, boards, pins }) => {
  return {
    currentUser: session.currentUser,
    users,
    boards: boards.boards,
    pins: pins.pins
  }
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllPins: () => dispatch(requestAllPins()),
    requestUser: username => dispatch(requestUser(username)),
    open: component => dispatch(open(component))
  }
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserPinsIndex);
