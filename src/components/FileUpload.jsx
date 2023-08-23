import { Button } from '@mui/material';
import React from 'react';
import './styles/FileUpload.css';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

const buttonStyle = {
  color: '#1a73e8',
  fontWeight: 'bold',
  textTransform: 'none'
};

const FileUpload = () => {
  return (
    <div className='file-upload-container'>
      <div className='file-upload-title'>
        File Upload <span className='file-upload-required'> *</span>
      </div>

      <Button className='file-upload-button' variant='outlined' sx={buttonStyle}>
        <div className='file-upload-content'>
          <FileUploadOutlinedIcon />
          <p>Add file</p>
        </div>
      </Button>
    </div>
  );
};

export default FileUpload;
