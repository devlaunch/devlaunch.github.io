import React, { Component } from "react";
import Helmet from "react-helmet";

import { Container } from 'components/elements';
import config from '../../../data/SiteConfig';

class FeedbackPage extends Component {
  render() {
    return (
      <Container>
        <Helmet title={`StyleGuide | ${config.siteTitle}`} />
      </Container>
    );
  }
}

export default FeedbackPage;
