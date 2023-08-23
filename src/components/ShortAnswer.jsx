import { Input } from '@mui/material';
import React from 'react';
import './styles/ShortAnswer.css';

const ShortAnswer = () => {
  return (
    <div className='short-answer-container'>
      <div className='short-answer-title'>
        Short Answer <span className='short-answer-required'> *</span>
      </div>
      
      <Input className='short-answer-input half' placeholder='Your answer' />
    </div>
  );
};

export default ShortAnswer;
