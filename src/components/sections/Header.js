import React from "react";
import Link from "gatsby-link";
import { Absolute, Box, Button } from "rebass";

import Toolbar from '../elements/Toolbar';
import NavLink from '../elements/NavLink';

function Header() {
  return (
    // <Absolute z={2} top={0} left={0} right={0}>
      <Toolbar px={[0, 3]} bg="white">
        <NavLink is={Link} color="gray.7" to="/">
          DevLaunch
        </NavLink>
        <Box mx="auto" />
        <NavLink is={Link} to="/home">
          Solutions
        </NavLink>
        <NavLink is={Link} to="/blog">
          Stories
        </NavLink>
        <Button>
          Contact Us
        </Button>
      </Toolbar>
    // </Absolute>
  );
}

export default Header;
