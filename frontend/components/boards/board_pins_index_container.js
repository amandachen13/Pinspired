import { connect } from 'react-redux';
import BoardPinsIndex from './board_pins_index';
import { requestSinglePin } from './../../actions/pin_actions';

const mapStateToProps = ({ pins }) => {
  return {
    pins: pins.pins
  }
};

const mapDispatchToProps = dispatch => {
  return {
    requestSinglePin: id => dispatch(requestSinglePin(id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardPinsIndex);
