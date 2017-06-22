import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <Link className="icon-temp" to='/'>Logo</Link>
        <span className="search-bar">Search</span>
        <Link className="icon-temp" to='/'>Discover</Link>
        <Link className="icon-temp" to={`/${this.props.currentUser}`}>Profile</Link>
        <button className="icon-temp" onClick={this.props.logout}>Log Out</button>
      </header>
    );
  }
}

export default withRouter(Header);
