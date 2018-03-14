import React, { Component } from 'react';
import { Flex, Box, Heading, Lead } from 'rebass';

import Section from '../../../components/elements/Section';
import Text from '../../../components/elements/Text';
import SectionHeading from '../../../components/elements/SectionHeading';

class Typography extends Component {
  render() {
    return (
      <React.Fragment>
        <Section id='Heading'>
          <Flex>
            <Box width={[ 1, 1/3 ]}>
              <SectionHeading>Heading</SectionHeading>
              <Text>All HTML headings, h1 through h6, are available.</Text>
            </Box>
            <Box>
              <Heading is="h1">
                StyleGuide Heading H1
              </Heading>
              <Heading is="h2">
                StyleGuide Heading H2
              </Heading>
              <Heading is="h3">
                StyleGuide Heading H3
              </Heading>
              <Heading is="h4">
                StyleGuide Heading H4
              </Heading>
              <Heading is="h5">
                StyleGuide Heading H5
              </Heading>
              <Heading is="h6">
                StyleGuide Heading H6
              </Heading>
            </Box>
          </Flex>
        </Section>
        <Section id='Lead'>
          <Flex>
            <Box width={[ 1, 1/3 ]}>
              <SectionHeading>Lead</SectionHeading>
              <Text>Make a paragraph stand out by adding Lead.</Text>
            </Box>
            <Box width={[ 1, 2/3 ]}>
              <Lead>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
              </Lead>
            </Box>
          </Flex>
        </Section>
        <Section id='Inline text elements'>
          <Flex>
            <Box width={[ 1, 1/3 ]}>
              <SectionHeading>Inline text elements</SectionHeading>
              <Text>Styling for common inline HTML5 elements</Text>
            </Box>
            <Box width={[ 1, 2/3 ]}>
              <p>You can use the mark tag to <mark>highlight</mark> text.</p>
              <p><del>This line of text is meant to be treated as deleted text.</del></p>
              <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
              <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
              <p><u>This line of text will render as underlined</u></p>
              <p><small>This line of text is meant to be treated as fine print.</small></p>
              <p><strong>This line rendered as bold text.</strong></p>
              <p><em>This line rendered as italicized text.</em></p>
            </Box>
          </Flex>
        </Section>
        <Section id='Abbreviations'>
          <Flex>
            <Box width={[ 1, 1/3 ]}>
              <SectionHeading>Abbreviations</SectionHeading>
              <Text>Stylized implementation of HTML’s abbr element for abbreviations and acronyms to show the expanded version on hover.</Text>
            </Box>
            <Box width={[ 1, 2/3 ]}>
              <p><abbr title="attribute">attr</abbr> </p>
              <p><abbr title="HyperText Markup Language">HTML</abbr> </p>
            </Box>
          </Flex>
        </Section>
        <Section id='Address'>
          <Flex>
            <Box width={[ 1, 1/3 ]}>
              <SectionHeading>Address</SectionHeading>
              <Text>Use address tag to cover the address infomration.</Text>
            </Box>
            <Box width={[ 1, 2/3 ]}>
              <address> 
                <strong>Twitter, Inc.</strong>
                <br /> 795 Folsom Ave, Suite 600 
                <br /> San Francisco, CA 94107 
                <br /> <abbr title="Phone">Phone:</abbr> (123) 456-7700 
                <br /> <abbr title="Fax">Fax:</abbr> (123) 456-7701
              </address>
            </Box>
          </Flex>
        </Section>
      </React.Fragment>
    );
  }
}

export default Typography;
