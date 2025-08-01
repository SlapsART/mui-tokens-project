import React, { useState } from 'react';
import './App.css';
import { Box, Button, Drawer } from '@mui/material';
import {theme} from '../src/theme/theme';
import { paddings, gaps } from './theme/spacing';

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <Box display={'flex'} alignContent={'center'} justifyContent={'center'} marginTop={50} gap={gaps['5Gap']}>
      <Button
        color='primary'
        variant='contained'
        sx={
            {
              borderRadius: 6,
              backgroundColor: theme.palette.primary.main,
              padding: paddings.padding['1,5 p']
            }
          }>
        Click Me
      </Button>
      <Button
        onClick={openDrawer}
        variant='outlined'
        color='primary'
          sx={
            {
              borderRadius: 6,
              color: theme.palette.primary.main,
            }}>
        Drawer
      </Button>
      <Drawer open={drawerOpen} onClose={closeDrawer}>
        <Box
          sx={{
            width: 250,
            padding: paddings.padding['3p']
          }}
        >
          <h2>Drawer Content</h2>
          <p>This is a simple drawer example.</p>
        </Box>
      </Drawer>
    </Box>
  );
};

export default App;