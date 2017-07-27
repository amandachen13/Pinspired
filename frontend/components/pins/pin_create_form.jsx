import React from 'react';
import { merge, values, keys } from 'lodash';
import { Link, withRouter } from 'react-router-dom';

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

    $.embedly.defaults.key = '1b788a6c74d5445ea5c6cadb932249e3';
    this.scrapeImages = this.scrapeImages.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  scrapeImages(e1) {
    e1.preventDefault();
    const url = e1.currentTarget.value;
    this.setState({url: url});

    $.embedly.extract(url).progress(data => {
    	const images = data.images;
    	const $container = $('<div class=\'images-container\'>');
    	images.forEach( (image, idx) => {
        let imageUrl = image.url;
    		// let imageUrl = $.embedly.display.resize(image.url, {query: {width: 300}});
    		let $img = $(`<img class=\'scraped-image ${idx}\'>`);

        // default-select first image
        if (idx == 0) {
          this.setState({image: imageUrl});
        }

        $img.on("click", (e2) => {
          this.setState({image: imageUrl});
          $('.images-container').children().each( function() {
            $(this).attr('class', 'pin-image-unselected');
          });
          $img.attr('class', 'pin-image-selected');
        }).bind(this);
    		$img.attr('src', imageUrl);
    		$container.append($img);
    	});

      $('.pin-create-images').html($container);
    });

  }

  boardList() {
    let boards = values(this.props.currentUser.boards);
    if ( this.props.history.location.pathname.includes('/board/') ) {
      let board_id = parseInt(this.props.history.location.pathname.split('/').pop());

      if (board_id in this.props.currentUser.boards) {
        boards = [this.props.currentUser.boards[board_id]];
      }
    }
    const boardNames = boards.map( board => {
      const boardId = board.id;
      return (
      <li key={boardId} className="pin-save-board">
        <div className="pin-save-board">{board.name}</div>
        <div onClick={ () => this.props.createPin(merge({},
            {title: this.state.title},
            {url: this.state.url},
            {description: this.state.description},
            {image: this.state.image},
            {board_id: boardId})).then(() => this.props.close()) } className="pin-save-final">
          <i className="fa fa-thumb-tack" aria-hidden="true"></i>
          <div className="pin-save">Save</div>
        </div>
      </li>
      );
    });
    return boardNames;
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    document.getElementById("titleError").innerHTML = "";
    document.getElementById("urlError").innerHTML = "";
  }

  componentDidUpdate() {
    if (this.props.errors) {
      this.props.errors.forEach((err) => {
        switch(err.substring(0,4)) {
          case "Titl":
            document.getElementById("titleError").innerHTML = err;
            break;
          case "Url ":
            document.getElementById("urlError").innerHTML = err;
            break;
        }
      });
    }
  }

  render() {
    return(
      <div className="pin-edit-form-container">
        <div className="pin-edit-header">
          <div className="pin-edit-header">Create a Pin</div>
          <div className="pin-edit-exit">
            <i onClick={ () => this.props.close() } className="fa fa-times fa-lg" aria-hidden="true"></i>
          </div>
        </div>
        <div className="pin-edit-header-line"></div>
        <div className="pin-create-form-container">
          <div className="pin-create-left">
            <form className="pin-create-form">
              <div className="pin-create-error">
                <input type="text" placeholder="Title"
                  className="pin-create-input"
                  value={this.state.title}
                  onChange={this.update('title')}
                />
                <div id="titleError"></div>
              </div>
              <div className="pin-create-error">
                <input type="text" placeholder="https://..."
                  className="pin-create-input"
                  value={this.state.url}
                  onChange={this.scrapeImages}
                  />
                <div id="urlError"></div>
              </div>
              <div className='pin-create-images'>
                <i className="fa fa-file-image-o" aria-hidden="true"></i>
              </div>
              <textarea placeholder="Tell us about this Pin..."
                className="pin-create-text"
                value={this.state.description}
                onChange={this.update('description')}
              />
              <br/>
            </form>
          </div>
          <div className="pin-create-right">
            <div className="pin-create-choose-board">Choose board</div>
            <ul>
              {this.boardList()}
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(PinCreateForm);

// <div className="pin-create-error">
//   <input type="text" placeholder="Image URL"
//     className="pin-create-input"
//     value={this.state.image}
//     onChange={this.update('image')}
//   />
//   <div id="imageError"></div>
// </div>
