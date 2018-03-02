import React, { Component } from "react";
import Link from "gatsby-link";
import { Flex, Text } from 'rebass';
import UserLinks from "./UserLinks";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const copyright = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <Flex is="footer" direction="column" align="center" py={7}>
        <UserLinks config={config} labeled />
        <Text fontSize={1} my={4}>
          {copyright}
        </Text>
        <Link to={url}>Subscribe</Link>
        <Text fontSize={1} my={4}>
          Based on {" "}
          <Link to={"https://github.com/Vagr9K/gatsby-advanced-starter"}>
            Gatsby Advanced Starter
          </Link>
        </Text>
      </Flex>
    );
  }
}

export default Footer;
