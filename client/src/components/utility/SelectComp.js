import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectComp() {
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ width: 348 }} size="small">
        <InputLabel id="demo-simple-select-autowidth-label"></InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={type}
          onChange={handleChange}
          label=""
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Flood</MenuItem>
          <MenuItem value={21}>Earthquake</MenuItem>
          <MenuItem value={22}>Medical</MenuItem>
          <MenuItem value={22}>Cyclone</MenuItem>
          <MenuItem value={22}>Others</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}