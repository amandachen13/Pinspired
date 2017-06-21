import { connect } from 'react-redux';
import { signup, clearErrors } from './../../actions/session_actions';
// import { validate, prevStep } from './../../actions/signup_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
