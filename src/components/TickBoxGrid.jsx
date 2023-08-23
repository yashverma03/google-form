import { FormControl, FormControlLabel, Checkbox, RadioGroup } from '@mui/material';
import React from 'react';
import './styles/MultiChoiceGrid.css';

const TickBoxGrid = () => {
  const checkBoxStyle = {
    paddingLeft: '60px'
  };

  return (
    <div className='multi-choice-grid-container'>
      <div className='multi-choice-grid-title'>
        Tick box Grid<span className='multi-choice-grid-required'> *</span>
      </div>

      <div className='multi-choice-grid-columns'>
        <div className='multi-choice-grid-column'>Column 1</div>
        <div className='multi-choice-grid-column'>Column 2</div>
        <div className='multi-choice-grid-column'>Column 3</div>
      </div>

      <div className='multi-choice-grid-rows'>
        <div className='multi-choice-grid-row'>
          <div className='multi-choice-grid-row-title'>Row 1</div>
          <div className='multi-choice-grid-row-options' >
            <FormControl >
              <RadioGroup row>
                <FormControlLabel sx={checkBoxStyle} value='1' control={<Checkbox />} labelPlacement='top' />
                <FormControlLabel sx={checkBoxStyle} value='2' control={<Checkbox />} labelPlacement='top' />
                <FormControlLabel sx={checkBoxStyle} value='3' control={<Checkbox />} labelPlacement='top' />
              </RadioGroup>
            </FormControl>
          </div>
        </div>

        <div className='multi-choice-grid-row'>
          <div className='multi-choice-grid-row-title'>Row 2</div>
          <div className='multi-choice-grid-row-options'>
            <FormControl>
              <RadioGroup row>
                <FormControlLabel sx={checkBoxStyle} value='1' control={<Checkbox />} labelPlacement='top' />
                <FormControlLabel sx={checkBoxStyle} value='2' control={<Checkbox />} labelPlacement='top' />
                <FormControlLabel sx={checkBoxStyle} value='3' control={<Checkbox />} labelPlacement='top' />
              </RadioGroup>
            </FormControl>
          </div>
        </div>

        <div className='multi-choice-grid-row'>
          <div className='multi-choice-grid-row-title'>Row 3</div>
          <div className='multi-choice-grid-row-options'>
            <FormControl>
              <RadioGroup row>
                <FormControlLabel sx={checkBoxStyle} value='1' control={<Checkbox />} labelPlacement='top' />
                <FormControlLabel sx={checkBoxStyle} value='2' control={<Checkbox />} labelPlacement='top' />
                <FormControlLabel sx={checkBoxStyle} value='3' control={<Checkbox />} labelPlacement='top' />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>
    </div >
  );
};

export default TickBoxGrid;
