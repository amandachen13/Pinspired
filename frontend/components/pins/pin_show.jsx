import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PinShow extends React.Component {
  constructor(props) {
    super(props);

    this.ownPin = this.ownPin.bind(this)
  }

  componentDidMount() {
    this.props.requestSinglePin(this.props.pinId);
  }

  ownPin() {

  }

  render() {
    if (this.props.pins[this.props.pinId]) {
      const pin = this.props.pins[this.props.pinId]
      return(
        <div className="pin-show">
          <img className="pin-show-image" src={pin.image_url} />
          <div className="pin-show-url">{pin.url}</div>
          <div>USER PICTURElink</div>
          <div>USERlink or YOUlink saved to BOARDlink</div>
          <div>Pin Description</div>
        </div>
      );
    } else {
      return null;
    }
  }

}

export default withRouter(PinShow);
