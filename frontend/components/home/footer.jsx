import React from 'react';
import PinCreateFormContainer from './../pins/pin_create_form_container';
import { Link, withRouter } from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.revealDropdown = this.revealDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
  }

  revealDropdown(e) {
    event.stopPropagation(); // prevent event from being picked up by body
  	$('#links-dropdown').removeClass('hidden');
    $('#links').off('click', this.revealDropdown);
    $(document).on('click', this.hideDropdown);
  }

  // add "hidden" class to dropdown and update event listeners
  hideDropdown() {
  	$('#links-dropdown').addClass('hidden');
    $('#links').on('click', this.revealDropdown);
    $(document).off('click', this.hideDropdown);
  }

  // Add click listener to links icon which invokes reveal function
  componentDidMount() {
    $(() => $('#links').on('click', this.revealDropdown));
  }

  render() {
    return (
      <div className="footer">
        <ul id="links-dropdown" className="links-dropdown hidden">
          <li className="links-dropdown"><a className="links-dropdown" target="_blank" href="https://github.com/amandachen13/Pinspired">Github</a></li>
          <li className="links-dropdown"><a className="links-dropdown" target="_blank" href="http://www.amandachen.io/">Portfolio</a></li>
          <li className="links-dropdown"><a className="links-dropdown" target="_blank" href="https://www.linkedin.com/in/amandachen13/">LinkedIn</a></li>
        </ul>
        <div className="footer-buttons">
          <button className="footer fa fa-plus" aria-hidden="true" onClick={ e => { e.stopPropagation(); this.props.open(<PinCreateFormContainer />);} }>
          </button>
          <button id="links" className="footer fa fa-question" aria-hidden="true">
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
