import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MasonryInfiniteScroller from 'react-masonry-infinite';
import MasonryLayout from 'react-masonry-layout';
import Masonry from 'react-masonry-component';
import PinSaveFormContainer from './pin_save_form_container';
import { randomizePins } from './../../reducers/selectors';

class PinsIndex extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      end: 20
    }

    this.infiniteScroll = this.infiniteScroll.bind(this);
  }

  componentDidMount() {
    window.bottom = false;
    window.addEventListener("scroll", this.infiniteScroll);
    this.props.requestAllPins();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.infiniteScroll);
  }

  infiniteScroll() {
    $(window).scroll( function() {
      if ($(window).scrollTop() <= $(document).height() - $(window).height() && $(window).scrollTop() >= $(document).height() - $(window).height() - 50) {
        window.bottom = true;
      }
    });

    if (window.bottom) {
      if (this.state.end < this.props.pins.length) {
        this.setState({
          end: this.state.end + 10
        });
      }
      window.bottom = false;
    }
  }

  pinsList() {
    const pins = this.props.pins.slice(0, this.state.end).map( pin => {
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
                  <div onClick={ e => { e.stopPropagation(); this.props.open(<PinSaveFormContainer pin={pin}/>);} } className="pin-save-modal">
                    <i className="fa fa-thumb-tack" aria-hidden="true"></i>
                    <div className="pin-save">Save</div>
                  </div>
                </div>
                <div className="pin-info">
                  <div className="pin-title">{pin.title}</div>
                  <div className="pin-desc">{pin.description}</div>
                </div>
              </div>
              <div onClick={ () => { this.props.history.push(`/${pin.creator.username}/board/${pin.board.id}`); }} className="pin-link-to-board">
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
    let masonryOptions = {
      transitionDuration: 0,
      gutter: 25,
      fitWidth: true
    };
    if (this.props.pins.length > 0) {
      return (
        <Masonry className={"pins-index-container"}
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

export default withRouter(PinsIndex);
