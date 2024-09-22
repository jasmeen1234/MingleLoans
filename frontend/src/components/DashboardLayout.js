import React from 'react';
import { Box, AppBar, Toolbar, Typography, Container, Avatar } from '@mui/material';

// Dummy user data for the header (you can replace this with actual data)
const user = {
  name: 'John Doe',
  profileImage: 'https://via.placeholder.com/150',
};

const DashboardLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* AppBar (Header) */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Typography variant="body1" sx={{ mr: 2 }}>
            {user.name}
          </Typography>
          <Avatar alt={user.name} src={user.profileImage} />
        </Toolbar>
      </AppBar>

      {/* Main content area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Container maxWidth="lg">
          {children} {/* This will render the child components like ReportPage */}
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardLayout;