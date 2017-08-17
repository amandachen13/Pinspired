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
  }

  componentDidMount() {
    // this.props.requestAllPins();
  }

  pinsIndexArr() {
    const pinsArr = [];
    const user = this.props.users[this.props.username];
    const pins = values(user.pins);
    pins.forEach( pin => {
      pinsArr.push(pin.id)
    });
    return pinsArr;
  }

  pinsList() {
    const user = this.props.users[this.props.username];
    const pins = [];
    this.pinsIndexArr().forEach( id => {
      const pin = user.pins[id];
      if (user.boards[pin.board_id]) {
        pins.push (
          <li key={pin.id}>
            <div className="pins-hover">
              <div className="pins">
                <div onClick={ () => this.props.history.push(`/pin/${pin.id}`) } >
                  <div className="pins-image">
                    <img className="pins" src={pin.image_url} />
                    <div className="dim-gradient">
                      <a className="pin-url" href={`${pin.url}`} target="_blank">{pin.url}</a>
                    </div>
                    <div onClick={ e => { e.stopPropagation(); this.props.open(<PinSaveFormContainer pin={this.props.pins[pin.id]}/>);} } className="pin-save-modal">
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
      }
    });
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


  render() {
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
    }
  }

}

export default withRouter(UserPinsIndex);
