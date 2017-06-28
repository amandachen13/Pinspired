import React from 'react';

class PinCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      url: '',
      description: '',
      image: '',
      board_id: ''
    };

    this.handleCreate = this.handleCreate.bind(this);
    // this.nextStep = this.nextStep.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleCreate(e) {
    const pin = this.state;
    this.props.createPin(pin);
    // if (this.props.errors.length === 0) {
    //   this.props.close();
    // }
    debugger
  }

  boardList() {
    // debugger

    // if (this.state.title && this.state.image && this.state.url) {
      // && (this.props.errors.length === 1)
      const boards = this.props.currentUser.boards;
      const boardNames = Object.keys(boards).map( name => {
        const boardId = boards[name];
        return (
        <li key={boardId} className="pin-save-board">
          <div>{name}</div>
          <div onClick={ (e) => { this.setState({board_id: boardId}); this.handleCreate(e); } } className="pin-save-final">
            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
            <div className="pin-save">Save</div>
          </div>
        </li>
        );
      });
      return boardNames;
  //   } else {
  //     return null;
  //   }
  }

  componentDidUpdate() {
    // debugger
    // debugger
    debugger
    if (this.props.errors) {
      this.props.errors.forEach((err) => {
        switch(err.substring(0,4)) {
          case "Titl":
            document.getElementById("titleError").innerHTML = err;
          case "Imag":
            document.getElementById("imageError").innerHTML = err;
          case "Url ":
            document.getElementById("urlError").innerHTML = err;
        }
      });
    }
  }

  // componentWillUpdate() {
    // debugger
    // if (this.state.errors) {
    //   this.props.errors.forEach((err) => {
    //     switch(err.substring(0,4)) {
    //       case "Titl":
    //         document.getElementById("titleError").innerHTML = err;
    //       case "Imag":
    //         document.getElementById("imageError").innerHTML = err;
    //       case "Url ":
    //         document.getElementById("urlError").innerHTML = err;
    //     }
    //   });
    // }
  // }

  // componentWillReceiveProps() {
  //   debugger
  //   document.getElementById("titleError").innerHTML = "";
  //   document.getElementById("imageError").innerHTML = "";
  //   document.getElementById("urlError").innerHTML = "";
  // }

  componentWillUnmount() {
    // debugger;
    this.props.clearErrors();
  }

  nextStep(e) {
    // debugger
    e.preventDefault();
    const pin = this.state;
    this.props.createPin(pin);

    // if only one error
    // return boards list
    // else, render errors
    // debugger
    // if (this.state.errors) {
    //   this.props.errors.forEach((err) => {
    //     switch(err.substring(0,4)) {
    //       case "Titl":
    //         document.getElementById("titleError").innerHTML = err;
    //       case "Imag":
    //         document.getElementById("imageError").innerHTML = err;
    //       case "Url ":
    //         document.getElementById("urlError").innerHTML = err;
    //     }
    //   });
    // }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div>
        <h3>Create a Pin</h3>
        <br/>
        {this.renderErrors()}
        <form>
          <input type="text" placeholder="Title"
            value={this.state.title}
            onChange={this.update('title')}
          />
          <span id="titleError"></span>
          <br/>
          <input type="text" placeholder="Image URL"
            value={this.state.image}
            onChange={this.update('image')}
          />
          <span id="imageError"></span>
          <br/>
          <input type="text" placeholder="https://..."
            value={this.state.url}
            onChange={this.update('url')}
          />
          <span id="urlError"></span>
          <br/>
          <textarea placeholder="Tell us about this pin..."
            value={this.state.description}
            onChange={this.update('description')}
          />
          <br/>
        </form>
        <br/>
        <ul>
          {this.boardList()}
        </ul>
      </div>
    )
  }
}

export default PinCreateForm;
