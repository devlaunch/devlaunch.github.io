import React, { Component } from 'react';
import { Box } from 'rebass';

import Section from '../../../components/elements/Section';
import Text from '../../../components/elements/Text';
import SectionHeading from '../../../components/elements/SectionHeading';

class Layouts extends Component {
  render() {
    return (
      <Section id='Colors'>
        <SectionHeading>Layouts</SectionHeading>
        <Text>Layouts using Responsive React grid system built with styled-components</Text>
        <Box />
      </Section>
    );
  }
}

export default Layouts;
