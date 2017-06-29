import { connect } from 'react-redux';
import { deletePin } from './../../actions/pin_actions';
import { close } from './../../actions/modal_actions';
import { requestSingleBoard } from './../../actions/board_actions';
import { requestUser } from './../../actions/user_actions';
import PinDeleteWarning from './pin_delete_warning';

const mapStateToProps = ({ session, pins }, history) => {
  return {
    history
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePin: id => dispatch(deletePin(id)),
    requestSingleBoard: id => dispatch(requestSingleBoard(id)),
    requestUser: id => dispatch(requestUser(id)),
    close: () => dispatch(close())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PinDeleteWarning);
