import { connect } from 'react-redux';
import { createPin } from './../../actions/pin_actions';
import { close } from './../../actions/modal_actions';
import PinSaveForm from './pin_save_form';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPin: pin => dispatch(createPin(pin)),
    close: () => dispatch(close())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PinSaveForm);
