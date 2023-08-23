import { Input } from '@mui/material';
import React from 'react';
import './styles/ShortAnswer.css';

const ParaGraph = () => {
  return (
    <div className='short-answer-container'>
      <div className='short-answer-title'>
        ParaGraph <span className='short-answer-required'> *</span>
      </div>
      <Input className='short-answer-input full' placeholder='Your answer' />
    </div>
  );
};

export default ParaGraph;
