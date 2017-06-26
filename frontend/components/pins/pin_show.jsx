import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
        <div className="pin-show-options" onClick={ e => e.stopPropagation() }>EDIT SAVE</div>
      );
    } else {
      return (
        <div className="pin-show-options" onClick={ e => e.stopPropagation() }>SAVE</div>
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
              <img className="pin-show-image" src={pin.image_url} />
              <div className="pin-show-url">{pin.url}</div>
              <div>USER PICTURElink</div>
              <Link to={`/${pin.creator.username}`}>{this.ownPinCreator()}</Link>
              <span> save this to </span>
              <Link to={`/${pin.creator.username}/${pin.board.name}`}>{pin.board.name}</Link>
              <div>{pin.description}</div>
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
