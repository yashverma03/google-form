import { Button } from '@mui/material';
import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  const buttonStyle = {
    backgroundColor: 'rgb(103, 58, 183)',
    textTransform: 'none'
  };

  return (
    <div className='footer-container'>
      <div className='footer-button-container'>
        <div className='footer-button'>
          <Button variant='contained' sx={buttonStyle} >Submit</Button>
        </div>

        <div className='footer-page-info'>
          <div className='footer-progress-bar'>
            <div className='footer-progress-fill'></div>
          </div>
          <p>Page 1 of 1</p>
        </div>

        <div className='footer-clear-form'>
          <p>Clear form</p>
        </div>
      </div>

      <div className='footer-note'>
        <p>Never submit passwords through Google Forms.</p>
      </div>

      <div className='footer-legal-info'>
        <p>
          This content is neither created nor endorsed by Google.
          <a href='https://policies.google.com/terms' className='footer-legal-link'>Report Abuse</a> -
          <a href='https://policies.google.com/terms' className='footer-legal-link'>Terms of Service</a> -
          <a href='https://policies.google.com/privacy' className='footer-legal-link'>Privacy Policy</a>
        </p>
      </div>

      <div className='footer-brand'>
        <p><span>Google </span>Forms</p>
      </div>
    </div>
  );
};

export default Footer;
