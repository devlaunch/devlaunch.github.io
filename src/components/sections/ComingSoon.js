import React, { Component } from "react";
import { Banner, Heading, Lead } from "rebass";

class ComingSoon extends Component {
  render() {
    const { appName } = this.props;
    return (
      <Banner color="gray.8" bg="white">
        <Heading is="h1" fontSize={[5, 6, 7, 8]}>
          {appName}
        </Heading>
        <Heading is="h1" fontSize={[5, 6, 7, 8]}>
          Coming Soon
        </Heading>
        <Lead fontSize={[2, 3, 4, 5]} fontWeight="thin">
          A place to realize your ideas.
        </Lead>
      </Banner>
    );
  }
}

export default ComingSoon;
