import { connect } from 'react-redux';
// import { deletePin, editPin, clearErrors } from './../../actions/pin_actions';
import { close } from './../../actions/modal_actions';
import UserProfileEdit from './user_profile_edit';

const mapStateToProps = ({ users }) => {
  return {
    users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    close: () => dispatch(close())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserProfileEdit);
