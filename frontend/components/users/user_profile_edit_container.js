import { connect } from 'react-redux';
// import { deletePin, editPin, clearErrors } from './../../actions/pin_actions';
import { close } from './../../actions/modal_actions';
import { updateUser } from './../../actions/user_actions';
import UserProfileEdit from './user_profile_edit';

const mapStateToProps = ({ session, users }) => {
  return {
    currentUser: session.currentUser,
    users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    close: () => dispatch(close()),
    updateUser: (formData, username) => dispatch(updateUser(formData, username))
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserProfileEdit);
