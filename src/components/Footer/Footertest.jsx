import React from 'react';
import { Container, Grid, Typography, Link, Box, IconButton } from '@material-ui/core';
import { Facebook, Twitter, Google, Instagram, LinkedIn, GitHub } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footertest() {
  return (
    <footer
      className="text-center text-lg-start text-dark"
      style={{ backgroundColor: '#ECEFF1' }}
    >
      {/* Section: Social media */}
      <section
        className="d-flex justify-content-between p-4 text-white"
        style={{ backgroundColor: '#21D192' }}
      >
        {/* Left */}
        <div className="me-5">
          <Typography variant="body1">Get connected with us on social networks:</Typography>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <IconButton aria-label="Facebook" className="text-white me-4" href="https://www.facebook.com/">
            <Facebook />
          </IconButton>
          <IconButton aria-label="Twitter" className="text-white me-4" href="https://www.twitter.com/">
            <Twitter />
          </IconButton>
          <IconButton aria-label="Google" className="text-white me-4" href="https://www.google.com/">
            <Google />
          </IconButton>
          <IconButton aria-label="Instagram" className="text-white me-4" href="https://www.instagram.com/">
            <Instagram />
          </IconButton>
          <IconButton aria-label="LinkedIn" className="text-white me-4" href="https://www.linkedin.com/">
            <LinkedIn />
          </IconButton>
          <IconButton aria-label="GitHub" className="text-white me-4" href="https://www.github.com/">
            <GitHub />
          </IconButton>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links  */}
      <section>
        <Container maxWidth="md">
          <Grid container spacing={2} className="mt-3">
            {/* Grid column */}
            <Grid item xs={12} md={3} lg={4} xl={3} className="mx-auto mb-4" key="company-name">
              {/* Content */}
              <Typography variant="h6" className="text-uppercase fw-bold">
                Company name
              </Typography>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }}
              />
              <Typography variant="body1">
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                
              </Typography>
            </Grid>
            {/* Grid column */}

            {/* Grid column */}
            <Grid item xs={12} md={2} lg={2} xl={2} className="mx-auto mb-4" key="products">
              {/* Links */}
              <Typography variant="h6" className="text-uppercase fw-bold">
                Products
              </Typography>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }}
              />
              <Typography variant="body1">
                <Link href="#" className="text-dark">
                  MDBootstrap
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link href="#" className="text-dark">
                  MDWordPress
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link href="#" className="text-dark">
                  BrandFlow
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link href="#" className="text-dark">
                  Bootstrap Angular
                </Link>
              </Typography>
            </Grid>
            {/* Grid column */}

            {/* Grid column */}
            <Grid item xs={12} md={3} lg={2} xl={2} className="mx-auto mb-4" key="useful-links">
              {/* Links */}
              <Typography variant="h6" className="text-uppercase fw-bold">
                Useful links
              </Typography>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }}
              />
              <Typography variant="body1">
                <Link href="#" className="text-dark">
                  Your Account
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link href="#" className="text-dark">
                  Become an Affiliate
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link href="#" className="text-dark">
                  Shipping Rates
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link href="#" className="text-dark">
                  Help
                </Link>
              </Typography>
            </Grid>
            {/* Grid column */}

            {/* Grid column */}
            <Grid item xs={12} md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4" key="contact">
              {/* Links */}
              <Typography variant="h6" className="text-uppercase fw-bold">
                Contact
              </Typography>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }}
              />
              <Typography variant="body1">
                <i className="fas fa-home mr-3" />
                New York, NY 10012, US
              </Typography>
              <Typography variant="body1">
                <i className="fas fa-envelope mr-3" />
                info@example.com
              </Typography>
              <Typography variant="body1">
                <i className="fas fa-phone mr-3" />
                + 01 234 567 88
              </Typography>
              <Typography variant="body1">
                <i className="fas fa-print mr-3" />
                + 01 234 567 89
              </Typography>
            </Grid>
            {/* Grid column */}
          </Grid>
        </Container>
      </section>
      {/* Section: Links  */}

      {/* Copyright */}
      <Box className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <Typography variant="body1">
          © 2020 Copyright:
          <Link href="https://mdbootstrap.com/" className="text-dark">
            MDBootstrap.com
          </Link>
        </Typography>
      </Box>
      {/* Copyright */}
    </footer>
  );
}

export default Footertest;