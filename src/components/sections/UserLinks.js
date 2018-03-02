import React, { Component } from "react";
import Link from "gatsby-link";
import { Github, Twitter, Mail } from "react-feather";

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    let image = null;
    return userLinks.map(link => {
      if (link.label === "GitHub") {
        image = <Github />;
      } else if (link.label === "GitHub") {
        image = <Twitter />;
      } else {
        image = <Mail />;
      }
      return (
        <Link key={link.label} to={link.url}>
          {image}
          {labeled ? link.label : ""}
        </Link>
      );
    });
  }
  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <div className="user-links">{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
