import React from 'react';
import Link from 'gatsby-link';
import { Box, Button, Toolbar, NavLink } from 'components/elements';


function Header() {
  return (
    <Toolbar px={[0, 3]} bg="white">
      <NavLink is={Link} color="gray.7" to="/">
        DevLaunch
      </NavLink>
      <Box mx="auto" />
      <NavLink is={Link} to="/solutions">
        Solutions
      </NavLink>
      <NavLink is={Link} to="/blog">
        Stories
      </NavLink>
      <Button is={Link} to="/about" m={2}>
        Contact Us
      </Button>
    </Toolbar>
  );
}

export default Header;
