import { Button } from '@mui/material';
import React from 'react';
import './styles/FileUpload.css';

const buttonStyle = {
  fontWeight: 'bold'
};

const FileUpload = () => {
  return (
    <div className='file-upload-container'>
      <div className='file-upload-title'>
        File Upload <span className='file-upload-required'> *</span>
      </div>
      <Button className='file-upload-button' variant='outlined' sx={buttonStyle}>Add file</Button>
    </div>
  );
};

export default FileUpload;
