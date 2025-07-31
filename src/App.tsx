import React, { useState } from 'react';
import './App.css';
import { Box, Button, Drawer } from '@mui/material';
import { tokens } from '../src/theme/tokens.json';

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <Box display={'flex'} alignContent={'center'} justifyContent={'center'} marginTop={50} gap={2}>
      <Button
        color='primary'
        variant='contained'
        sx={
            {
              borderRadius: 6,
              backgroundColor: tokens.paletteLight.primary.main,
              py: tokens.paletteLight.padding.vertical.button.large,
              px: tokens.paletteLight.padding.horizontal.button.large
            }
          }>
        Click Me
      </Button>
      <Button
        onClick={openDrawer}
        variant='text'
        color='primary'
          sx={
            {
              borderRadius: 6,
              color: tokens.paletteLight.primary.main,
              py: tokens.paletteLight.padding.vertical.button.large,
              px: tokens.paletteLight.padding.horizontal.button.large
            }}>
        Drawer
      </Button>
      <Drawer open={drawerOpen} onClose={closeDrawer}>
        <Box
          sx={{
            width: 250,
            backgroundColor: tokens.paletteLight.background.Paper,
            color: tokens.paletteLight.text.primary,
            padding: 6
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
