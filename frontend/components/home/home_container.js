import { connect } from 'react-redux';
import { login, signup, logout } from './../../actions/session_actions';
import Home from './home';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  }
};

const mapDispatchToProps = (dispatch, { location }) => {
  const message = (location === '/') ?
    "Welcome to Pinspired" : "Sign up to see more";
  return {
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    logout: () => dispatch(logout()),
    demoLogin: user => dispatch(login(user)),
    message
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
