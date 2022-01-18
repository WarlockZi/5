import React from 'react';
import {Button} from "@mui/material";

export default function Statistics() {
  const stat = {
    color: 'blue',
    padding: '10px'
  }
  return (<>
      <Button variant="contained">Hello World</Button>
      <div style={stat}>Статистика</div>
    </>
  )
}

