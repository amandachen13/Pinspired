import { connect } from 'react-redux';
import BoardPinsIndex from './board_pins_index';
import { requestSinglePin, requestAllPins } from './../../actions/pin_actions';
import { open } from './../../actions/modal_actions';

const mapStateToProps = ({session, pins, boards }) => {
  return {
    currentUser: session.currentUser,
    pins: pins.pins,
    boards: boards.boards
  }
};

const mapDispatchToProps = dispatch => {
  return {
    requestSinglePin: id => dispatch(requestSinglePin(id)),
    requestAllPins: () => dispatch(requestAllPins()),
    open: component => dispatch(open(component))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardPinsIndex);
