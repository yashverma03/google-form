import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';

const MultiChoiceGrid = () => {
  return (
    <div>
      <div>
        Multi choice Grid <span> *</span>
      </div>

      <div>
        <span>Row 1</span>

        <FormControl>
          <RadioGroup row>
            <FormControlLabel value="1" control={<Radio />} label="Column 1" labelPlacement="top" />
            <FormControlLabel value="2" control={<Radio />} label="Column 2" labelPlacement="top" />
            <FormControlLabel value="3" control={<Radio />} label="Column 3" labelPlacement="top" />
          </RadioGroup>
        </FormControl>
      </div>

      <div>
        <span>Row 2</span>

        <FormControl>
          <RadioGroup row>
            <FormControlLabel value="1" control={<Radio />} labelPlacement="top" />
            <FormControlLabel value="2" control={<Radio />} labelPlacement="top" />
            <FormControlLabel value="3" control={<Radio />} labelPlacement="top" />
          </RadioGroup>
        </FormControl>
      </div>

      <div>
        <span>Row 3</span>

        <FormControl>
          <RadioGroup row>
            <FormControlLabel value="1" control={<Radio />} labelPlacement="top" />
            <FormControlLabel value="2" control={<Radio />} labelPlacement="top" />
            <FormControlLabel value="3" control={<Radio />} labelPlacement="top" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default MultiChoiceGrid;
