import React, { Component } from 'react';
import { Box } from 'rebass';

import Section from '../../../components/elements/Section';
import Text from '../../../components/elements/Text';
import SectionHeading from '../../../components/elements/SectionHeading';

class Icons extends Component {
  render() {
    return (
      <Section id='Icons'>
        <SectionHeading>Icons</SectionHeading>
        <Text>Open source Icons from Feather Icons.</Text>
        <Box />
      </Section>
    );
  }
}

export default Icons;
