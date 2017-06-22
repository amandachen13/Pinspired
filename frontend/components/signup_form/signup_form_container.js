import { connect } from 'react-redux';
import { login, signup, clearErrors } from './../../actions/session_actions';
// import { validate, prevStep } from './../../actions/signup_actions';
import SignupForm from './signup_form';

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
    demoLogin: user => dispatch(login(user)),
    message
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
