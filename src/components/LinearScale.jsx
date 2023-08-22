import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';

const LinearScale = () => {
  return (
    <div>
      <div>
        Linear Scale <span> *</span>
      </div>

      <div>
        <span>Worst</span>

        <FormControl>
          <RadioGroup row>
            <FormControlLabel value="1" control={<Radio />} label="1" labelPlacement="top" />
            <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement="top" />
            <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement="top" />
            <FormControlLabel value="4" control={<Radio />} label="4" labelPlacement="top" />
            <FormControlLabel value="5" control={<Radio />} label="5" labelPlacement="top" />
          </RadioGroup>
        </FormControl>
        
        <span>Best</span>
      </div>
    </div>
  );
};

export default LinearScale;
