import React, { Component } from "react";
import Helmet from "react-helmet";

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
        <Typography />
        <Layouts />
        <Colors />
        <Icons />
      </Container>
    );
  }
}

export default ContentPage;
