import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import HeaderContainer from './../home/header_container';
import Masonry from 'react-masonry-component';
import UserProfileEditContainer from'./user_profile_edit_container';
import UserPinsIndexContainer from './user_pins_index_container';

class UserPins extends React.Component {
  constructor(props) {
    super(props);

    this.handleOpenEdit = this.handleOpenEdit.bind(this);
    this.ownProfile = this.ownProfile.bind(this);
  }

  componentDidMount() {
    debugger
    this.props.requestUser(this.props.username);
  }

  // componentWillUpdate() {

  // }

  handleOpenEdit(e) {
    e.preventDefault();
    this.props.open(<UserProfileEditContainer username={this.props.username} />);
  }

  ownProfile() {
    if (this.props.currentUser.username === this.props.username) {
      return (
        <div className="profile-options">
          <div onClick={this.handleOpenEdit} className="profile-settings">
            <i className="fa fa-cog" aria-hidden="true"></i>
          </div>
        </div>
      );
    } else {
      return (
        <div className="profile-options">
          FOLLOW OR UNFOLLOW
        </div>
      );
    }
  }

  render() {
    if (this.props.user) {
      debugger
      // if (this.props.user.pins) {
        return(
          <div className="profile-show-container">
            <HeaderContainer />
            {this.ownProfile()}
            <h1 className="profile-show-username">{this.props.username}</h1>
            <div className="profile-info">
              <div className="profile-info-left">
                <div className="profile-description">{this.props.user.description}</div>
              </div>
              <div className="profile-info-right">
                <div className="profile-follow">
                  <span className="profile-follow-num">0</span>
                  <br/>
                  <span className="profile-follow">Followers</span>
                </div>
                <div className="profile-follow">
                  <span className="profile-follow-num">0</span>
                  <br/>
                  <span className="profile-follow">Following</span>
                </div>
                <div className="profile-pic">
                  <img className="profile-pic" src={this.props.user.image_url} />
                </div>
              </div>
            </div>
            <div className="profile-links">
              <Link className="profile-links" to={`/${this.props.username}/boards`}>Boards</Link>
              <Link className="profile-links-active" to={`/${this.props.username}/pins`}>Pins</Link>
            </div>
            <UserPinsIndexContainer username={this.props.username} />
          </div>
        );
      // } else {
      // return null;
      // }
    } else {
      return null;
    }
  }

}

export default withRouter(UserPins);
