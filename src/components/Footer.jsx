import { Button } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <Button variant="contained">Submit</Button>
        </div>
        <div>
          <div className='' />
        </div>
        <div>
          <p>Page 1 of 1</p>
        </div>
        <div>
          <p>Clear form</p>
        </div>
      </div>

      <div>
        <p>Never submit passwords through Google Forms.</p>
      </div>

      <div>
        <p>
          This content is neither created nor endorsed by Google.
          <span> Report Abuse</span> -
          <span> Terms of Service</span> -
          <span> Privacy Policy</span>
        </p>
      </div>

      <div>
        <p><span>Google </span>Forms</p>
      </div>
    </div>
  );
};

export default Footer;
