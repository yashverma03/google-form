import { FormControlLabel, FormGroup, Checkbox } from '@mui/material';
import React from 'react';

const CheckBox = () => {
  return (
    <div>
      <div>
        CheckBox<span> *</span>
      </div>
      <div>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Option 1" />
          <FormControlLabel control={<Checkbox />} label="Option 2" />
          <FormControlLabel control={<Checkbox />} label="Option 3" />
        </FormGroup>
      </div>

    </div>
  );
};

export default CheckBox;
