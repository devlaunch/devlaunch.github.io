import React, { Component } from "react";
import Helmet from "react-helmet";
import { Heading, Banner, Button, Container } from 'components/elements';
import { Link } from 'gatsby-link';

import config from '../../data/SiteConfig';

class SolutionPage extends Component {
  render() {
    return (
      <Container>
        <Helmet title={`Solutions | ${config.siteTitle}`} />
        <Banner color="gray.8" bg="white">
          <Heading is="h1" fontSize={[5, 6, 7, 8]}>
           Under Construction
          </Heading>
          <Button.Big is={Link} to="/">
            Home
          </Button.Big>
        </Banner>
      </Container>
    );
  }
}

export default SolutionPage;
