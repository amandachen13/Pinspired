import { connect } from 'react-redux';
import BoardPinsIndex from './board_pins_index';
import { requestSinglePin } from './../../actions/pin_actions';
import { open } from './../../actions/modal_actions';

const mapStateToProps = ({session, pins }) => {
  return {
    currentUser: session.currentUser,
    pins: pins.pins
  }
};

const mapDispatchToProps = dispatch => {
  return {
    requestSinglePin: id => dispatch(requestSinglePin(id)),
    open: component => dispatch(open(component))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardPinsIndex);
