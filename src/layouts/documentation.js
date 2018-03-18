import React from "react";
import Helmet from "react-helmet";
import { Provider, Flex, Box } from 'rebass';

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
        <Flex flexWrap='wrap'>
          <SideBar />
          <Box width='calc(100% - 250px)' flex='1 1 auto'>
            {children()}
          </Box>
        </Flex>
        <Footer config={config} />
      </Provider>
    );
  }
}
