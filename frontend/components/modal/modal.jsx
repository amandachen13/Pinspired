import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isOpen) {
      return (
        <div>
          <div className="modal-root" >
            <div className="modal-parent">
              <div className="modal-screen">
                <div className="modal-wrapper">
                  <div className="closeModal" onClick={ () => this.props.close() }/>
                  <div className="modal-content">
                    {this.props.component}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Modal;
