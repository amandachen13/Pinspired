import React from 'react';
import MasonryInfiniteScroller from 'react-masonry-infinite';
import MasonryLayout from 'react-masonry-layout';

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

  pins_list() {
    return(
      <ul className="pins-index">
        {this.props.pins.map((pin, idx) => (
          <li className="pins" key={idx}>
            <img src={pin.image_url}/>
            {pin.title}
            {pin.url}
            {pin.description}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.props.pins.length > 0) {
      return <ul>{this.pins_list()}</ul>
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
