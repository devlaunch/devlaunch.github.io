import styled from 'styled-components';
import { Container } from 'rebass';

const Section = styled(Container)`
`;

Section.defaultProps = {
  color: 'gray.7',
  py: 4,
  is: 'section',
  maxWidth: '100vw'
}



export default Section;