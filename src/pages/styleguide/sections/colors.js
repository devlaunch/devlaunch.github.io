import React, { Component } from 'react';
import { Box } from 'rebass';

import Section from '../../../components/elements/Section';
import Text from '../../../components/elements/Text';
import SectionHeading from '../../../components/elements/SectionHeading';

class Colors extends Component {
  render() {
    return (
      <Section id='Colors'>
        <SectionHeading>Colors</SectionHeading>
        <Text>Open-Color color scheme Optimized for UI like font, background, border, etc.</Text>
        <Box />
      </Section>
    );
  }
}

export default Colors;
