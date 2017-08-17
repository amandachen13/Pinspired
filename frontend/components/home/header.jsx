import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
          <Link className="icon-temp logo" to='/'>
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-3x" aria-hidden="true"></i>
              <i className="fa fa-cloud fa-stack-2x" aria-hidden="true"></i>
              <i className="fa fa-thumb-tack fa-stack-1x fa-inverse" aria-hidden="true"></i>
            </span>
          </Link>
        <span className="search-bar">Search</span>
        <Link className="icon-temp nav-bar" to='/'>Home</Link>
        <Link className="icon-temp nav-bar" to={`/${this.props.currentUser}`}>Profile</Link>
        <button className="icon-temp" onClick={this.props.logout}>Log Out</button>
      </header>
    );
  }
}

export default withRouter(Header);
