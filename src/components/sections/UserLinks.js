import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Flex, NavLink } from 'components/elements';
import { Github, Twitter, Mail, Rss } from 'react-feather';

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    let image = null;
    return userLinks.map(link => {
      if (link.label === "GitHub") {
        image = <Github size={16} />;
      } else if (link.label === "Twitter") {
        image = <Twitter size={16} />;
      } else {
        image = <Mail size={16} />;
      }
      return (
        <NavLink key={link.label} href={link.url} mr={2}>
          {image}
          {labeled ? link.label : ""}
        </NavLink>
      );
    });
  }
  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return (
      <Flex>
        {this.getLinkElements()}
        <NavLink is={Link} to={this.props.config.siteRss} mr={2}>
          <Rss size={16} />
        </NavLink>
      </Flex>
    );
  }
}

export default UserLinks;
