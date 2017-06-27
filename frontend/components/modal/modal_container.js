import { connect } from 'react-redux';
import Modal from './modal';
import { close, receiveComponent } from './../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    isOpen: state.modal.isOpen,
    component: state.modal.component
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveComponent: component => dispatch(receiveComponent(component)),
    close: () => dispatch(close())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
