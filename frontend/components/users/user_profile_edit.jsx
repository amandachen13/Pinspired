import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.users[this.props.username].id,
      username: this.props.username,
      description: this.props.users[this.props.username].description,
      imageFile: null,
      imageUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  handleSubmit(e) {
    let formData = new FormData();
    formData.append("user[username]", this.state.username);
    formData.append("user[description]", this.state.description);
    formData.append("user[id]", this.state.id);
    if (this.state.imageFile) {
      formData.append("user[image]", this.state.imageFile);
    }
    this.props.updateUser(formData, this.props.username).then(() => this.props.close());

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    return(
      <div className="user-edit-profile-container">
        <div className="user-edit-header">
          <div className="user-edit-header">Profile</div>
          <div className="user-edit-exit">
            <i onClick={ () => this.props.close() } className="fa fa-times fa-lg" aria-hidden="true"></i>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="user-edit-picture">
            <div>
              <div className="user-edit-label">Picture</div>
              <img className="user-edit-picture" src={this.props.users[this.props.username].image_url} />
            </div>
            <div className="user-edit-picture-right">
              <div className="user-edit-label">Change picture</div>
              <input className="user-choose-picture" type="file" onChange={this.updateFile} />
              <img className="user-image-prev" src={this.state.imageUrl} />
            </div>
          </div>
          <div className="user-edit-description">
            <label className="user-edit-label" htmlFor="Description">About you</label>
            <br />
            <textarea
              className="user-edit-description"
              id="Description"
              value={this.state.description}
              onChange={this.update('description')}
            />
          </div>
          <div className="user-buttons-row">
            <div className="user-buttons">
              <button onClick={ () => this.props.close() } className="user">Cancel</button>
              <input className="user-edit-save" type="submit" value="Save" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(UserProfileEdit);
