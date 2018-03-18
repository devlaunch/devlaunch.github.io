import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { width, order } from 'styled-system';
import { Flex, Box, Sticky, NavLink } from 'components/elements';

const Root = styled(Sticky)`
  flex: none;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  max-height: 100vh;
  ${width}
  ${order}
`;

const A = styled(props => (
  <NavLink {...props} is={Link} width={1} />
))`
  display: block;
`;

function SideBar() {
  return (
    <Root width={[1, 250]} order={[2, 0]} top={0} bg='gray.0'>
      <Flex flexWrap="wrap" px={2} pt={3} pb={5}>
        <Box width={[1/2, 1]}>
          <A to="/overview">Overview</A>
          <A to="/content">Content</A>
          <A to="/navigation">Navigation</A>
          <A to="/datadisplay">Data Display</A>
          <A to="/feedback">Feedback</A>
          <A to="/dataentry">Data Entry</A>
        </Box>
      </Flex>
    </Root>
  );
}

export default SideBar;
