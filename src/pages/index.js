import React from "react";
import Helmet from "react-helmet";

import { Container } from 'components/elements';
import ComingSoon from 'components/sections/ComingSoon';
import SEO from "components/sections/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Container>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <ComingSoon appName={config.siteTitle} />
      </Container>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
