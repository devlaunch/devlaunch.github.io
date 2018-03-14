import React, { Component } from "react";
import Helmet from "react-helmet";
import { Heading, Banner, Lead } from 'rebass';
import { Link } from 'gatsby-link';

import Button from '../../components/elements/Button';
import Container from '../../components/elements/Container';
import Typography from './sections/typography';
import Colors from './sections/colors';
import Layouts from './sections/layouts';
import Icons from './sections/icons';
import config from '../../../data/SiteConfig';

class ContentPage extends Component {
  render() {
    return (
      <Container>
        <Helmet title={`StyleGuide | ${config.siteTitle}`} />
        <Banner color="gray.8" bg="white">
          <Heading is="h1" fontSize={[5, 6, 7, 8]}>
           StyleGuide
          </Heading>
          <Lead fontSize={[2, 3, 4, 5]} my={4} fontWeight="thin">
          An innovative React template solution based on Rebass built with styled-components that makes it reusable and easy to work on.
          </Lead>
          <Button.Big is={Link} to="/">
            Home
          </Button.Big>
        </Banner>
        <Typography />
        <Layouts />
        <Colors />
        <Icons />
      </Container>
    );
  }
}

export default ContentPage;
