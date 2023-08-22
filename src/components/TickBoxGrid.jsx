import { FormControl, FormControlLabel, Checkbox, RadioGroup } from '@mui/material';
import React from 'react';

const TickBoxGrid = () => {
  return (
    <div>
      <div>
        Tick box Grid <span> *</span>
      </div>

      <div>
        <span>Row 1</span>

        <FormControl>
          <RadioGroup row>
            <FormControlLabel value="1" control={<Checkbox />} label="Column 1" labelPlacement="top" />
            <FormControlLabel value="2" control={<Checkbox />} label="Column 2" labelPlacement="top" />
            <FormControlLabel value="3" control={<Checkbox />} label="Column 3" labelPlacement="top" />
          </RadioGroup>
        </FormControl>
      </div>

      <div>
        <span>Row 2</span>

        <FormControl>
          <RadioGroup row>
            <FormControlLabel value="1" control={<Checkbox />} labelPlacement="top" />
            <FormControlLabel value="2" control={<Checkbox />} labelPlacement="top" />
            <FormControlLabel value="3" control={<Checkbox />} labelPlacement="top" />
          </RadioGroup>
        </FormControl>
      </div>

      <div>
        <span>Row 3</span>

        <FormControl>
          <RadioGroup row>
            <FormControlLabel value="1" control={<Checkbox />} labelPlacement="top" />
            <FormControlLabel value="2" control={<Checkbox />} labelPlacement="top" />
            <FormControlLabel value="3" control={<Checkbox />} labelPlacement="top" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default TickBoxGrid;
