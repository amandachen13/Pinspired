import { connect } from 'react-redux';
import { editPin, deletePin, clearErrors } from './../../actions/pin_actions';
import { close } from './../../actions/modal_actions';
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
    deletePin: id => dispatch(deletePin(id)),
    close: () => dispatch(close())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PinEditForm);
