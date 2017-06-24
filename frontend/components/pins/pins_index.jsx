import React from 'react';
import MasonryInfiniteScroller from 'react-masonry-infinite';
import MasonryLayout from 'react-masonry-layout';
import Masonry from 'react-masonry-component';

class PinsIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   elements: [],
    //   pin_num: 10
    // }
    //
    // this.hasMore = this.hasMore.bind(this);
    // this.nextPins = this.nextPins.bind(this);
    // this.loadMore = this.loadMore.bind(this);
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

  pinsList() {
    const pins = this.props.pins.map( pin => {
      return (
        <li key={pin.id}>
          <div className="pins-hover">
            <div className="pins">
              <div className="pins-image">
                <img className="pins" src={pin.image_url} />
                <div className="dim-gradient">
                  <div className="pin-url">{pin.url}</div>
                </div>
              </div>
              <div className="pin-info">
                <div className="pin-title">{pin.title}</div>
                <div className="pin-desc">{pin.description}</div>
              </div>
              <div className="pin-link-to-board">
                <span className="pin-creator">{pin.creator.username}</span>
                <span className="pin-board">Board Name</span>
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
