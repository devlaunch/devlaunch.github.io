import styled from 'styled-components';
import { Container } from 'rebass';

const Section = styled(Container)`
`;

Section.defaultProps = {
  color: 'gray.6',
  py: 4,
  is: 'section'
}



export default Section;