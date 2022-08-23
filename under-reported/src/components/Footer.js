import React from 'react';
import '../scss/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div className="footer">
            <a href="/" className="item">
                <FontAwesomeIcon icon="fa-brands fa-square-facebook" size="3x" className="white-icon"/>
            </a>
            <a href="/" className="item">
                <FontAwesomeIcon icon="fa-brands fa-instagram" size="3x" className="white-icon"/>
            </a>
            <a href="/" className="item">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" size="3x" className="white-icon"/>
            </a>
        </div>
    )
}

export default Footer;