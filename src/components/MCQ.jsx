import React from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import './styles/MCQ.css';

const MCQ = () => {
  return (
    <div className='mcq-container'>
      <div className='mcq-title'>
        MCQ<span className='mcq-required'> *</span>
      </div>
      
      <div className='mcq-options'>
        <RadioGroup>
          <FormControlLabel className='mcq-option' value='Option1' control={<Radio />} label='Option 1' />
          <FormControlLabel className='mcq-option' value='Option2' control={<Radio />} label='Option 2' />
          <FormControlLabel className='mcq-option' value='Option3' control={<Radio />} label='Option 3' />
        </RadioGroup>
      </div>
    </div>
  );
};

export default MCQ;
