import { connect } from 'react-redux';
import { deletePin, editPin, clearErrors } from './../../actions/pin_actions';
import { requestSingleBoard } from './../../actions/board_actions';
import { open, close } from './../../actions/modal_actions';
import PinEditForm from './pin_edit_form';

const mapStateToProps = ({ session, pins }) => {
  return {
    currentUser: session.currentUser,
    errors: pins.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editPin: pin => dispatch(editPin(pin)),
    clearErrors: () => dispatch(clearErrors()),
    open: component => dispatch(open(component)),
    deletePin: id => dispatch(deletePin(id)),
    requestSingleBoard: id => dispatch(requestSingleBoard(id)),
    close: () => dispatch(close())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PinEditForm);
