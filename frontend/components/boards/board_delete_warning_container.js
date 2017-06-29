import { connect } from 'react-redux';
import { deleteBoard } from './../../actions/board_actions';
import { close } from './../../actions/modal_actions';
import { requestSingleBoard } from './../../actions/board_actions';
import BoardDeleteWarning from './board_delete_warning';

const mapStateToProps = ({ session }, history) => {
  return {
    currentUser: session.currentUser,
    history
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteBoard: id => dispatch(deleteBoard(id)),
    close: () => dispatch(close())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(BoardDeleteWarning);
