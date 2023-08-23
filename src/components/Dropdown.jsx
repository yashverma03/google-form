import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import './styles/Dropdown.css';

const Dropdown = () => {
  const [choose, setChoose] = useState('');

  const handleChange = (event) => {
    setChoose(event.target.value);
  };

  return (
    <div className='dropdown-container'>
      <div className='dropdown-title'>
        Drop down<span className='dropdown-required'> *</span>
      </div>
      <Box>
        <FormControl>
          <InputLabel className='dropdown-label'>Choose</InputLabel>
          <Select className='dropdown-select' value={choose} label='Choose' onChange={handleChange}>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Dropdown;
