import { connect } from 'react-redux';
import { logout } from './../../actions/session_actions';
import Header from './header';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser.username
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
