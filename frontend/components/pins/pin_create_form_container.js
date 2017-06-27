import { connect } from 'react-redux';
import { createPin, clearErrors } from './../../actions/pin_actions';
import { close } from './../../actions/modal_actions';
import PinCreateForm from './pin_create_form';

const mapStateToProps = ({ session, pins }) => {
  return {
    currentUser: session.currentUser,
    errors: pins.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPin: pin => dispatch(createPin(pin)),
    clearErrors: () => dispatch(clearErrors()),
    close: () => dispatch(close())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PinCreateForm);
