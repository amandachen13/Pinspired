import { connect } from 'react-redux';
import { logout } from './../../actions/session_actions';
import { open } from './../../actions/modal_actions';
import Footer from './footer';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser.username
  }
}

const mapDispatchToProps = dispatch => {
  return {
    open: component => dispatch(open(component))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
