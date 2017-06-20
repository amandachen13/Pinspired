import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const SessionFormOption = ({ message, formType, linkText }) => (
  <div>
    <span>{message}</span>
    <Link to={`/${formType}`}>{linkText}</Link>
  </div>
);

export default SessionFormOption;
