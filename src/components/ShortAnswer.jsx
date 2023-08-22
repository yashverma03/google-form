import { Input } from '@mui/material';
import React from 'react';

const ShortAnswer = () => {
  return (
    <div>
      <div>
        Short Answer <span> *</span>
      </div>
      <div>
        <Input placeholder="Your answer" />
      </div>
    </div>
  );
};

export default ShortAnswer;
