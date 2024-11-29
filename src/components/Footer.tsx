import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Phone, Email, LocationOn, Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOn sx={{ mr: 1 }} />
              <Typography variant="body2">
                123 Luxury Avenue<br />
                Miami, FL 33101
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Phone sx={{ mr: 1 }} />
              <Link href="tel:+1-305-555-0123" color="inherit" underline="hover">
                (305) 555-0123
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Email sx={{ mr: 1 }} />
              <Link href="mailto:info@sucondo.com" color="inherit" underline="hover">
                info@sucondo.com
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Office Hours
            </Typography>
            <Typography variant="body2" paragraph>
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM<br />
              Sunday: Closed
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton color="inherit" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <Twitter />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 4, borderTop: '1px solid rgba(255, 255, 255, 0.1)', pt: 2 }}
        >
          © {new Date().getFullYear()} SU Condo. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;