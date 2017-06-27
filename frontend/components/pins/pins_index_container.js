import { connect } from 'react-redux';
import { requestAllPins, clearErrors } from './../../actions/pin_actions';
import { randomizePins } from './../../reducers/selectors'
import PinsIndex from './pins_index';
import { values } from 'lodash';
import { open } from './../../actions/modal_actions';

const mapStateToProps = ({ pins }) => {
  return {
    // randomPins: randomizePins(pins.pins),
    // pins: values(pins.pins).reverse()
    pins: values(pins.pins)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllPins: () => dispatch(requestAllPins()),
    clearErrors: () => dispatch(clearErrors()),
    open: component => dispatch(open(component))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinsIndex);
