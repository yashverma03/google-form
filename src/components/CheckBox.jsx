import { FormControlLabel, FormGroup, Checkbox } from '@mui/material';
import React from 'react';
import './styles/MCQ.css';

const CheckBox = () => {
  return (
    <div className='mcq-container'>
      <div className='mcq-title'>
        CheckBox<span className='mcq-required'> *</span>
      </div>

      <div className='mcq-options'>
        <FormGroup>
          <FormControlLabel className='mcq-option' control={<Checkbox />} label='Option 1' />
          <FormControlLabel className='mcq-option' control={<Checkbox />} label='Option 2' />
          <FormControlLabel className='mcq-option' control={<Checkbox />} label='Option 3' />
        </FormGroup>
      </div>
    </div>
  );
};

export default CheckBox;
