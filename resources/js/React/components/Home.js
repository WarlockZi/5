import React from 'react';
import {TextField, Autocomplete} from "@mui/material";


export default function Home() {
  const options = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ];

  return (
    <>
    <p>Home</p>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{m: 2, width: 300}}
      renderInput={(params) => <TextField {...params} label="Movie"/>}
    />
    </>
  )
}

