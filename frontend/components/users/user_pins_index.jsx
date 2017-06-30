import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import { values } from 'lodash';
import PinCreateFormContainer from './../pins/pin_create_form_container';
import PinSaveFormContainer from './../pins/pin_save_form_container';

class UserPinsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.pinsIndexArr = this.pinsIndexArr.bind(this);
    this.pinsList = this.pinsList.bind(this);
    // this.handlePinShow = this.handlePinShow.bind(this);
  }

  componentDidMount() {
    // //debugger;
    // const firstPinId = this.pinsIndexArr()[0];
    // this.props.requestSinglePin(firstPinId);
    // //debugger;
    // this.pinsIndexArr().forEach( id => {
    //   this.props.requestSinglePin(id);
    // });
    // this.props.requestUser(this.props.username);
    this.props.requestAllPins();
  }

  // shouldComponentUpdate(nextProps) {
  //   const pinsInState = Object.keys(this.props.pins);
  //   const pinsInBoard = this.pinsIndexArr();
  //   //debugger
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
  //   //debugger
  // }

  pinsIndexArr() {
    const pinsArr = [];
    //debugger
    const user = this.props.users[this.props.username];
    //debugger
    const pins = values(user.pins);
    //debugger
    // //debugger
    // const pins = this.props.board.pins;
    pins.forEach( pin => {
      pinsArr.push(pin.id)
    });
    //debugger
    return pinsArr;
  }

  // handlePinShow() {
  //   e.stopPropagation();
  //   return this.props.history.push(`/pins/${pin.id}`)
  // }

  pinsList() {
    //debugger
    const user = this.props.users[this.props.username];
    const pins = this.pinsIndexArr().map( id => {
      //debugger
      const pin = user.pins[id];
      //debugger
      return (
        <li key={pin.id}>
          <div className="pins-hover">
            <div className="pins">
              <div onClick={ () => this.props.history.push(`/pin/${pin.id}`) } >
                <div className="pins-image">
                  <img className="pins" src={pin.image_url} />
                  <div className="dim-gradient">
                    <a className="pin-url" href={`${pin.url}`} target="_blank">{pin.url}</a>
                  </div>
                  <div onClick={ e => { e.stopPropagation(); this.props.open(<PinSaveFormContainer pin={pins[pin.id]}/>);} } className="pin-save-modal">
                    <i className="fa fa-thumb-tack" aria-hidden="true"></i>
                    <div className="pin-save">Save</div>
                  </div>
                </div>
                <div className="pin-info">
                  <div className="pin-title">{pin.title}</div>
                  <div className="pin-desc">{pin.description}</div>
                </div>
              </div>
              <div onClick={ () => this.props.history.push(`/${user.username}/board/${pin.board_id}`) } className="pin-link-to-board">
                <img className="pin-creator-pic" src={user.image_url} />
                <div className="pin-creator-info">
                  <span className="pin-creator">{user.username}</span>
                  <span className="pin-board">{user.boards[pin.board_id].name}</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    });
    //debugger
    if (user.username === this.props.currentUser.username) {
      pins.unshift(
        <li key="add">
          <div className="pins-add-hover" onClick={ e => { e.stopPropagation(); this.props.open(<PinCreateFormContainer />);} }>
            <div className="pins">
              <div className="pins-add">
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </li>
      );
    }
    return pins;
  }

  // noPins() {
  //   if (this.props.users[this.props.username].)
  // }

  render() {
    // return (
    //   <div>{this.props.board.name}</div>
    // );
    //debugger
    // const pinKeysInState = Object.keys(this.props.pins);
    // const pinsInState = pinKeysInState.map( id => parseInt(id) );
    // const pinsInBoard = this.pinsIndexArr();

    // if (pinsInBoard.every(id => pinsInState.indexOf(id) > -1)) {
    const user = this.props.users[this.props.username];
    if (user.pins) {
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

export default withRouter(UserPinsIndex);
