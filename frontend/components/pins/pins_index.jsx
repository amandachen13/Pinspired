import React from 'react';
import MasonryInfiniteScroller from 'react-masonry-infinite';
import MasonryLayout from 'react-masonry-layout';

class PinsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: this.props.pins.slice(0, 10),
      pin_num: 10
    }

    // this.hasMore = this.hasMore.bind(this);
    // this.nextPins = this.nextPins.bind(this);
    // this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.props.requestAllPins();
  }

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

  pins_list() {
    return(
      <ul className="pins-index">
        {this.props.pins.map((pin, idx) => (
          <li>
            {pin.title}
          </li>
        ))}
      </ul>
    );
  }

  //   return(
  //     <ul className="errors-list">
  //       {this.props.errors.map((error, i) => (
  //         <li className="errors-list-item" key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );


// if pins array is empty


  render() {
    if (this.props.pins.length > 0) {
      console.log('here');
      return <ul>{this.pins_list()}</ul>
    } else {
      return null;
    }
    // return(
      // <MasonryInfiniteScroller hasMore={this.hasMore()} loadMore={this.loadMore}>
      //   {
      //     this.state.elements.map((pin, idx) =>
      //       <div key={idx}>{pin.title}</div>
      //     )
      //   }
      // </MasonryInfiniteScroller>

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
