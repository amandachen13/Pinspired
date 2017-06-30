import React from 'react';
import { merge, values } from 'lodash';

class BoardCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.handleCreate = this.handleCreate.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleCreate(e) {
    e.preventDefault();
    const board = this.state;
    this.props.createBoard(board).then((res) => this.props.requestUser(res.board.creator.username)).then(() => this.props.close());
    // if (this.props.errors.length === 0) {
    //   this.props.close();
    // }
    // debugger
  }

  // componentDidUpdate() {
  //   // debugger
  //   // debugger
  //   // debugger
  //   debugger
  //   if (this.props.errors) {
  //     this.props.errors.forEach((err) => {
  //       switch(err.substring(0,4)) {
  //         case "Titl":
  //           document.getElementById("titleError").innerHTML = err;
  //         case "Imag":
  //           document.getElementById("imageError").innerHTML = err;
  //         case "Url ":
  //           document.getElementById("urlError").innerHTML = err;
  //       }
  //     });
  //   }
  // }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    document.getElementById("nameError").innerHTML = "";
  }

  componentDidUpdate() {
    if (this.props.errors) {
      this.props.errors.forEach((err) => {
        switch(err.substring(0,4)) {
          case "Name":
            document.getElementById("nameError").innerHTML = err;
            break;
        }
      });
    }
  }

  // componentWillReceiveProps() {
  //   debugger
  //   document.getElementById("titleError").innerHTML = "";
  //   document.getElementById("imageError").innerHTML = "";
  //   document.getElementById("urlError").innerHTML = "";
  // }

  // componentWillUpdate() {
  //   debugger;
    // this.props.clearErrors();
  // }

  // nextStep(e) {
    // debugger
    // e.preventDefault();
    // const pin = this.state;
    // this.props.createPin(pin);

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
  // }

  // renderErrors() {
  //   return(
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div className="board-edit-form-container">
        <div className="board-edit-header">
          <div className="board-edit-header">Create board</div>
          <div className="board-edit-exit">
            <i onClick={ () => this.props.close() } className="fa fa-times fa-lg" aria-hidden="true"></i>
          </div>
        </div>
        <div className="board-edit-header-line"></div>
        <form onSubmit={this.handleCreate}>
          <div className="board-edit-name">
            <label className="board-edit-label" htmlFor="Name">Name</label>
            <span id="nameError"></span>
            <input type="text" id="Name"
              className="board-edit-name"
              placeholder='Like "Places to Go" or "Recipes to Make"'
              value={this.state.name}
              onChange={this.update('name')}
            />
          </div>
          <div className="board-edit-buttons">
            <div>
            </div>
            <div>
              <button className="board" onClick={ () => this.props.close() }>Cancel</button>
              <input className="board-create-submit" type="submit" value="Create" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BoardCreateForm;
