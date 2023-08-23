import React from 'react';
import './styles/Header.css';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='rectangle' />
      <h2 className='header-title'>Assignment Task</h2>
      <hr className='header-divider' />

      <div className='header-email-wrapper'>
        <div className='header-email'>
          super.assistant@gmail.com<span className='header-switch-account'> Switch account</span>
        </div>
        <div className='header-cloud-icon'>
          <CloudDoneOutlinedIcon />
        </div>
      </div>

      <p className='header-description'>The name and photo associated with your Google account will be recorded when you upload files and submit this form. Your email is not part of your response.</p>
      <hr className='header-divider' />
      <p className='header-required'>* Indicates required question</p>
    </div>
  );
};

export default Header;
