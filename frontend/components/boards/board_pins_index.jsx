import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import { values } from 'lodash';

class BoardPinsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.pinsIndexArr = this.pinsIndexArr.bind(this);
    this.pinsList = this.pinsList.bind(this);
  }

  componentDidMount() {
    // const firstPinId = this.pinsIndexArr()[0];
    // this.props.requestSinglePin(firstPinId);
    this.pinsIndexArr().forEach( id => {
      this.props.requestSinglePin(id);
    });
  }

  // shouldComponentUpdate(nextProps) {
  //   const pinsInState = Object.keys(this.props.pins);
  //   const pinsInBoard = this.pinsIndexArr();
  //   debugger
  //
  //   if (pinsInBoard.every(id => pinsInState.indexOf(id) > -1)) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  //
  // componentWillUpdate() {
  //   const restPinIds = this.pinsIndexArr().slice(1);
  //   restPinIds.forEach( id => {
  //     this.props.requestSinglePin(id);
  //   });
  //   debugger
  // }

  pinsIndexArr() {
    const pinsArr = [];
    const pins = this.props.board.pins;
    pins.forEach( pin => {
      pinsArr.push(pin.id)
    });
    return pinsArr;
  }

  pinsList() {
    const pins = this.pinsIndexArr().map( id => {
      const pin = this.props.pins[id];
      return (
        <li key={pin.id}>
          <div className="pins-hover">
            <div className="pins">
              <div className="pins-image">
                <img className="pins" src={pin.image_url} />
                <div className="dim-gradient">
                  <a className="pin-url" href={`${pin.url}`} target="_blank">{pin.url}</a>
                </div>
                <div className="pin-save-modal">
                  <i className="fa fa-thumb-tack" aria-hidden="true"></i>
                  <div className="pin-save">Save</div>
                </div>
              </div>
              <div className="pin-info">
                <div className="pin-title">{pin.title}</div>
                <div className="pin-desc">{pin.description}</div>
              </div>
              <div onClick={ () => this.props.history.push(`/${pin.creator.username}/${pin.board.name}`) } className="pin-link-to-board">
                <img className="pin-creator-pic" src={pin.creator.image_url} />
                <div className="pin-creator-info">
                  <span className="pin-creator">{pin.creator.username}</span>
                  <span className="pin-board">{pin.board.name}</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    });
    return pins;
  }

  render() {
    // return (
    //   <div>{this.props.board.name}</div>
    // );
    const pinKeysInState = Object.keys(this.props.pins);
    const pinsInState = pinKeysInState.map( id => parseInt(id) );
    const pinsInBoard = this.pinsIndexArr();

    if (pinsInBoard.every(id => pinsInState.indexOf(id) > -1)) {
      let masonryOptions = {
        transitionDuration: 0,
        gutter: 25,
        fitWidth: true
      };
      return (
        <Masonry className={"board-pins-index-container"}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}>
          {this.pinsList()}
        </Masonry>
      );
    } else {
      return null;
    }
  }



}

export default withRouter(BoardPinsIndex);
