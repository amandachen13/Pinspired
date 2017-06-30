import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PinSaveFormContainer from './pin_save_form_container';
import PinEditFormContainer from './pin_edit_form_container';

class PinShow extends React.Component {
  constructor(props) {
    super(props);

    // this.ownPin = this.ownPin.bind(this);
  }

  componentDidMount() {
    this.props.requestSinglePin(this.props.pinId);
  }

  ownPinOptions() {
    if (this.props.currentUser.username === this.props.pin.creator.username) {
      return (
        <div className="pin-show-options" onClick={ e => e.stopPropagation() }>
          <div onClick={ e => { e.stopPropagation(); this.props.open(<PinEditFormContainer pin={this.props.pin} history={this.props.history}/>);} } className="pin-edit"><i className="fa fa-pencil fa-2x" aria-hidden="true"></i></div>
          <div onClick={ e => { e.stopPropagation(); this.props.open(<PinSaveFormContainer pin={this.props.pin}/>);} } className="pin-show-save-modal">
            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
            <div className="pin-save">Save</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="pin-show-options" onClick={ e => e.stopPropagation() }>
          <div> </div>
          <div onClick={ e => { e.stopPropagation(); this.props.open(<PinSaveFormContainer pin={this.props.pin}/>);} } className="pin-show-save-modal">
            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
            <div className="pin-save">Save</div>
          </div>
        </div>
      );
    }
  }

  ownPinCreator() {
    if (this.props.currentUser.username === this.props.pin.creator.username) {
      return "You";
    } else {
      return this.props.pin.creator.username;
    }
  }

  render() {
    if (this.props.pin) {
      const pin = this.props.pin;
      return(
        <div className="pin-unshow" onClick={ () => this.props.history.goBack() }>
          <div className="pin-show-page">
            {this.ownPinOptions()}
            <div className="pin-show" onClick={ e => e.stopPropagation() }>
              <div className="pin-show-title">{pin.title}</div>
              <img className="pin-show-image" src={pin.image_url} />
              <div className="pin-show-url"><a className="pin-show-url" href={pin.url}>{pin.url}</a></div>
              <div className="pin-show-line"></div>
              <div className="pin-show-creator-info">
                <img className="pin-show-creator-pic" src={pin.creator.image_url} />
                <div className="pin-show-creator-links">
                  <Link to={`/${pin.creator.username}`} className="pin-show-creator">{this.ownPinCreator()}</Link>
                  <span className="pin-show-pinning"> saved this to </span>
                  <Link to={`/${pin.creator.username}/board/${pin.board.id}`} className="pin-show-board">{pin.board.name}</Link>
                  <div className="pin-show-description">{pin.description}</div>
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

export default withRouter(PinShow);
