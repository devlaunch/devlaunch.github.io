import styled from 'styled-components';
import { Link } from 'rebass';

const StyledLink = styled(Link)`
  transition: color 0.2s ease;
  &:hover {
    text-decoration: none;
  }
`;

StyledLink.defaultProps = {
  color: 'gray.6'
}

export default StyledLink;