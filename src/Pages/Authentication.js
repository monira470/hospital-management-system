import { Login } from '../Components/Login';
import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { Registration } from '../Components/Registration';

export const Authentication = () => {
  const [value, setValue] = useState(0); // State to keep track of the selected tab

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    const layout = {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
  return (
    <div style={layout}>
      <Box sx={{ maxWidth: 500, margin: 'auto', padding: 3 }}>
      <Typography variant="h4" gutterBottom align="center">
        Hospital Management System
      </Typography>

      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Login" />
        <Tab label="Register" />
      </Tabs>

      <Box sx={{ paddingTop: 2 }}>
        {value === 0 ? <Login /> : <Registration />}
      </Box>
    </Box>
    </div>
  )
}
