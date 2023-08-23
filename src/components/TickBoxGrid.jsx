import { FormControl, FormControlLabel, Checkbox, RadioGroup } from '@mui/material';
import React from 'react';
import './styles/MultiChoiceGrid.css';

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
    <div className='multi-choice-grid-container'>
      <div className='multi-choice-grid-title'>
        Multi choice Grid<span className='multi-choice-grid-required'> *</span>
      </div>

      <div className='multi-choice-grid-columns'>
        <div className='multi-choice-grid-column'>Column 1</div>
        <div className='multi-choice-grid-column'>Column 2</div>
        <div className='multi-choice-grid-column'>Column 3</div>
      </div>

      <div className='multi-choice-grid-rows'>
        {gridData.map((row, rowIndex) => (
          <div className='multi-choice-grid-row' key={rowIndex}>
            <div className='multi-choice-grid-row-title'>{row.rowTitle}</div>
            <div className='multi-choice-grid-row-options'>
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
