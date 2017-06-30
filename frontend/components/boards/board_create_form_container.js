import { connect } from 'react-redux';
import { createBoard, clearErrors } from './../../actions/board_actions';
import { close } from './../../actions/modal_actions';
import { requestUser } from './../../actions/user_actions';
import BoardCreateForm from './board_create_form';

const mapStateToProps = ({ session, boards }) => {
  return {
    currentUser: session.currentUser,
    errors: boards.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBoard: board => dispatch(createBoard(board)),
    clearErrors: () => dispatch(clearErrors()),
    requestUser: username => dispatch(requestUser(username)),
    close: () => dispatch(close())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(BoardCreateForm);
