import styled from 'styled-components';
import { Container } from 'rebass';

const StyledContainer = styled(Container)`
`;

StyledContainer.defaultProps = {
  color: 'gray.7',
  maxWidth: '100vw'
}

export default StyledContainer;