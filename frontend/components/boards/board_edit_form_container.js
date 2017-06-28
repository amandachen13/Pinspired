import { connect } from 'react-redux';
import { deleteBoard, editBoard, clearErrors } from './../../actions/board_actions';
import { open, close } from './../../actions/modal_actions';
import BoardEditForm from './board_edit_form';

const mapStateToProps = ({ session, boards }) => {
  return {
    currentUser: session.currentUser,
    errors: boards.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editBoard: board => dispatch(editBoard(pin)),
    clearErrors: () => dispatch(clearErrors()),
    open: component => dispatch(open(component)),
    deleteBoard: id => dispatch(deleteBoard(id)),
    close: () => dispatch(close())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(BoardEditForm);
