import React from "react";
import Helmet from "react-helmet";
import { Provider } from 'rebass';

import config from "../../data/SiteConfig";
import { theme, baseStyles } from '../theme';
import Footer from '../components/sections/Footer';
import Header from '../components/sections/Header';
import SideBar from '../components/sections/SideBar';


export default class DocLayout extends React.Component {

  render() {
    baseStyles();
    const { children } = this.props;
    return (
      <Provider theme={theme}>
        <Helmet>
          <title>{`${config.siteTitle}}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Header />
        <SideBar />
        {children()}
        <Footer config={config} />
      </Provider>
    );
  }
}
