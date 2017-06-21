import { connect } from 'react-redux';
import { login } from './../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
