import React, { Component } from "react";
import Link from "gatsby-link";
import { Flex } from 'rebass';
import UserLinks from "../UserLinks/UserLinks";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const { copyright } = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <Flex is="footer" direction="column" align="center" py={7}>
        <UserLinks config={config} labeled />
        <h4>{copyright}</h4>
        <Link to={url}>
          <button>Subscribe</button>
        </Link>
        <h4>
          Based on{" "}
          <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
            Gatsby Advanced Starter
          </a>.
        </h4>
      </Flex>
    );
  }
}

export default Footer;
