import React, { Component } from "react";
import Link from "gatsby-link";
import { Flex, Box, Text, Container } from 'rebass';

import UserLinks from "./UserLinks";

class Footer extends Component {
  render() {
    const { config } = this.props;
    if (!config.copyright) {
      return null;
    }
    return (
      <Flex is="footer" flexDirection="column" alignItems="center">
        <UserLinks config={config} />
        <Flex>
          <Text fontSize={0}>
            {config.copyright}
          </Text>
          <Box mx={2} />
          <Text fontSize={0}>
            Based on {" "}
            <Link to="https://github.com/Vagr9K/gatsby-advanced-starter">
              Gatsby Advanced Starter
            </Link>
          </Text>
        </Flex>
      </Flex>
    );
  }
}

export default Footer;
