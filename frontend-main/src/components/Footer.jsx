
import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f5f5f5' }}>
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          © 2024 Daily Hunt. All Rights Reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
