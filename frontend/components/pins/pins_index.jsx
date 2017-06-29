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
    // this.state = {
    //   elements: [],
    //   pin_num: 10
    // }
    //
    // this.hasMore = this.hasMore.bind(this);
    // this.nextPins = this.nextPins.bind(this);
    // this.loadMore = this.loadMore.bind(this);
    // this.stopClick = this.stopClick.bind(this);
  }

  // componentDidMount() {
  //   this.props.requestAllPins();
  //   debugger;
  //   this.setState({ elements: this.props.pins.slice(0, this.state.pin_num) });
  //   debugger;
  // }

  componentDidMount() {
    this.props.requestAllPins();
  }

  // componentWillMount() {
  //   this.setState({ elements: this.props.pins.slice(0, this.state.pin_num) });
  // }

  // FOR INFINITE SCROLL

  // hasMore() {
  //   if (this.state.pin_num < this.props.pins.length) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  //
  // nextPins() {
  //   const start_num = this.state.pin_num;
  //   const end_num = start_num + 10;
  //   this.setState({ pin_num: end_num });
  //   this.props.pins.slice(start_num, end_num);
  // }
  //
  // loadMore() {
  //   this.setState({ elements: this.state.elements.push(this.nextPins()) });
  // }

  // END INFINITE SCROLL

  // stopClick(e) {
  //   e.stopPropagation();
  // }
  //
  // handleBoardShow(e) {
  //
  // }

  pinsList() {
    const pins = this.props.pins.map( pin => {
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
    //
    // if (this.state.elements.length > 0) {
    //     // this.setState({ elements: this.props.pins.slice(0, this.state.pin_num) });
    //   debugger;
    //   return(
    //     <MasonryInfiniteScroller hasMore={this.hasMore()} loadMore={this.loadMore}>
    //       {
    //         this.state.elements.map((pin, idx) =>
    //           <div key={idx}>{pin.title}</div>
    //         )
    //       }
    //     </MasonryInfiniteScroller>
    //   );
    // } else {
    //   debugger;
    //   return null;
    // }

      // <MasonryLayout>
      //
      //
      //
      // </MasonryLayout>

    //   <ul>{this.pins_list()}</ul>
    // );
  }

}

export default PinsIndex;
