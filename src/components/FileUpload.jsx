import { Button } from '@mui/material';
import React from 'react';

const FileUpload = () => {
  return (
    <div>
      <div>
        File Upload <span> *</span>
      </div>
      <div>
        <Button variant="outlined">Add file</Button>
      </div>
    </div>
  );
};

export default FileUpload;
