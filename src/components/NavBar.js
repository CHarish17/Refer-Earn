// src/components/NavBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Tabs, Tab } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          accredian
        </Typography>
        <Tabs value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Refer&Earn" />
          <Tab label="Resources" />
          <Tab label="About" />
        </Tabs>
        <Button color="primary">Login</Button>
        <Button variant="contained" color="primary">Try for free</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
