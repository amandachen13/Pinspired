import React from 'react';

class PinSaveForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.pin.title,
      url: this.props.pin.url,
      description: this.props.pin.description,
      image: this.props.pin.image_url,
      board_id: ""
    };

    // this.handleSave = this.handleSave.bind(this);
  }

  componentDidUpdate() {
    const pin = this.state;
    this.props.createPin(pin);
    this.props.close();
    this.props.requestSingleBoard(pin.board_id);
    // this.props.history.push('/');
  }

  componentWillUnmount() {

  }

  // boardId() {
  //   debugger
  //   return this;
  // }
  //
  // handleSave(boardId) {
  //   debugger;
  //   this.setState({board_id: boardId});
  //   debugger
  //   let pin = this.state;
  //   debugger
  //   let that = this;
  //   return () => {
  //     debugger
  //     that.props.createPin(pin);
  //   }

    // e.preventDefault();
    // debugger;
    // const boardId = parseInt(e.currentTarget.value);
    // this.setState({board_id: boardId});
    // const pin = this.state;
    // debugger
    // this.props.createPin(pin);
  // }

  boardList() {
    const boards = this.props.currentUser.boards;
    const boardNames = Object.keys(boards).map( name => {
      const boardId = boards[name];
      return (
      <li key={boardId} className="pin-save-board">
        <div>{name}</div>
        <div onClick={ () => { this.setState({board_id: boardId}) } } className="pin-save-final">
          <i className="fa fa-thumb-tack" aria-hidden="true"></i>
          <div className="pin-save">Save</div>
        </div>
      </li>
      );
    });
    return boardNames;
  }

  render() {
    return(
      <div>
        <div>
          Picture
          description
        </div>
        <div>
          Choose board
          list of own boards
          <ul>
            {this.boardList()}
          </ul>
        </div>
      </div>
    );
  }

}

export default PinSaveForm;
