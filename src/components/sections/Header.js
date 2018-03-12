import React from "react";
import Link from "gatsby-link";
import { Box } from "rebass";

import Button from '../elements/Button';
import Toolbar from '../elements/Toolbar';
import NavLink from '../elements/NavLink';

function Header() {
  return (
    <Toolbar px={[0, 3]} mb={1} bg="white">
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
