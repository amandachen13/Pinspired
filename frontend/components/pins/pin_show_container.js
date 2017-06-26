import { connect } from 'react-redux';
import { requestSinglePin } from './../../actions/pin_actions';
import PinShow from './pin_show';

const mapStateToProps = ({ session, pins }, { match }) => {
  const pinId = match.params.id;
  return {
    currentUser: session.currentUser,
    pinId,
    pin: pins.pins[pinId]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestSinglePin: id => dispatch(requestSinglePin(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinShow);
