import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../scss/Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <a href="mailto:info2underreported@gmail.com" target="_blank" rel="noopener noreferrer" className="item">
        <FontAwesomeIcon icon={faEnvelope} size="3x" className="white-icon" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100090854615611" target="_blank" rel="noopener noreferrer" className="item">
        <FontAwesomeIcon icon="fa-brands fa-square-facebook" size="3x" className="white-icon" />
      </a>
      <a href="/" className="item">
        <FontAwesomeIcon icon="fa-brands fa-instagram" size="3x" className="white-icon" />
      </a>
      <a href="/" className="item">
        <FontAwesomeIcon icon="fa-brands fa-linkedin" size="3x" className="white-icon" />
      </a>
    </div>
  )
}

export default Footer;