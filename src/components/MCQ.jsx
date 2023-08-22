import React from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

const MCQ = () => {
  return (
    <div>
      <div>
        MCQ<span> *</span>
      </div>
      <div>
        <RadioGroup>
          <FormControlLabel value="Option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="Option2" control={<Radio />} label="Option 2" />
          <FormControlLabel value="Option3" control={<Radio />} label="Option 3" />
        </RadioGroup>
      </div>
    </div>
  );
};

export default MCQ;
