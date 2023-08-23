import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import './styles/LinearScale.css';

const LinearScale = () => {
  return (
    <div className='linear-scale-container'>
      <div className='linear-scale-title'>
        Linear Scale <span className='linear-scale-required'> *</span>
      </div>

      <div className='linear-scale-options'>
        <div className='linear-scale-text'>Worst</div>
        <div className='linear-scale-radio-group'>
          <FormControl >
            <RadioGroup row>
              <FormControlLabel value='1' control={<Radio />} label='1' labelPlacement='top' />
              <FormControlLabel value='2' control={<Radio />} label='2' labelPlacement='top' />
              <FormControlLabel value='3' control={<Radio />} label='3' labelPlacement='top' />
              <FormControlLabel value='4' control={<Radio />} label='4' labelPlacement='top' />
              <FormControlLabel value='5' control={<Radio />} label='5' labelPlacement='top' />
            </RadioGroup>
          </FormControl>
        </div>
        <div className='linear-scale-text'>Best</div>
      </div>
    </div>
  );
};

export default LinearScale;
