import { connect } from 'react-redux';
import { deleteBoard } from './../../actions/board_actions';
import { close } from './../../actions/modal_actions';
import { requestSingleBoard } from './../../actions/board_actions';
import { requestUser } from './../../actions/user_actions';
import BoardDeleteWarning from './board_delete_warning';

const mapStateToProps = ({ session, users }, history) => {
  return {
    currentUser: session.currentUser,
    users,
    history
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteBoard: id => dispatch(deleteBoard(id)),
    requestUser: username => dispatch(requestUser(username)),
    close: () => dispatch(close())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(BoardDeleteWarning);
