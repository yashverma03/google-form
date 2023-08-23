import { FormControl, FormControlLabel, Checkbox, RadioGroup } from '@mui/material';
import React from 'react';
import './styles/Grid.css';

const TickBoxGrid = () => {
  const checkBoxStyle = {
    alignItems: 'flex-end'
  };

  const gridData = [
    { rowTitle: 'Row 1', options: ['1', '2', '3'] },
    { rowTitle: 'Row 2', options: ['1', '2', '3'] },
    { rowTitle: 'Row 3', options: ['1', '2', '3'] }
  ];

  return (
    <div className='grid-container'>
      <div className='grid-title'>
        Multi choice Grid<span className='grid-required'> *</span>
      </div>

      <div className='grid-columns'>
        <div className='grid-column'>Column 1</div>
        <div className='grid-column'>Column 2</div>
        <div className='grid-column'>Column 3</div>
      </div>

      <div className='grid-rows'>
        {gridData.map((row, rowIndex) => (
          <div className='grid-row' key={rowIndex}>
            <div className='grid-row-title'>{row.rowTitle}</div>
            <div className='grid-row-options'>
              {row.options.map((option, optionIndex) => (
                <FormControl key={optionIndex}>
                  <RadioGroup row>
                    <FormControlLabel sx={checkBoxStyle} value={option} control={<Checkbox />} labelPlacement='top' />
                  </RadioGroup>
                </FormControl>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickBoxGrid;
