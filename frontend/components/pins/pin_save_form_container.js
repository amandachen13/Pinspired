import { connect } from 'react-redux';
import { createPin } from './../../actions/pin_actions';
import { close } from './../../actions/modal_actions';
import { requestSingleBoard } from './../../actions/board_actions';
import PinSaveForm from './pin_save_form';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPin: pin => dispatch(createPin(pin)),
    requestSingleBoard: id => dispatch(requestSingleBoard(id)),
    close: () => dispatch(close())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PinSaveForm);
