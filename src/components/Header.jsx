import React from 'react';

const Header = ({ heading, email }) => {
  return (
    <div>
      <h2>{heading}</h2>
      <hr />
      <p>{email}<span>Switch account</span></p>
      <p>The name and photo associated with your Google account will be recorded when you upload files and submit this form. Your email is not part of your response.</p>
      <hr />
      <p>* Indicates required question</p>
    </div>
  );
};

export default Header;
