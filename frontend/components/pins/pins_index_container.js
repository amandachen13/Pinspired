import { connect } from 'react-redux';
import { requestAllPins } from './../../actions/pin_actions';
import { randomizePins } from './../../reducers/selectors'
import PinsIndex from './pins_index';
import { values } from 'lodash';

const mapStateToProps = ({ pins }) => {
  return {
    pins: randomizePins(pins.pins)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllPins: () => dispatch(requestAllPins())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinsIndex);
