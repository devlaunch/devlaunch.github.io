import React from 'react';
import { Heading, BlockLink } from 'rebass';

const SectionHeading = props => (
  <Heading mb={2}>
    <BlockLink
      {...props}
      href={`#${props.children}`}
    />
  </Heading>
)

export default SectionHeading;