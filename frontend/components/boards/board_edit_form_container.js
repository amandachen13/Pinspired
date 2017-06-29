import { connect } from 'react-redux';
import { deleteBoard, editBoard, requestSingleBoard, clearErrors } from './../../actions/board_actions';
import { requestUser } from './../../actions/user_actions';
import { open, close } from './../../actions/modal_actions';
import BoardEditForm from './board_edit_form';

const mapStateToProps = ({ session, boards }, history) => {
  return {
    currentUser: session.currentUser,
    boards: boards.boards,
    errors: boards.errors,
    history
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editBoard: board => dispatch(editBoard(board)),
    clearErrors: () => dispatch(clearErrors()),
    open: component => dispatch(open(component)),
    deleteBoard: id => dispatch(deleteBoard(id)),
    requestSingleBoard: id => dispatch(requestSingleBoard(id)),
    requestUser: username => dispatch(requestUser(username)),
    close: () => dispatch(close())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(BoardEditForm);
