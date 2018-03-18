import styled from 'styled-components';
import { NavLink } from "rebass";

const StyledNavLink = styled(NavLink)`
  font-weight: ${props => props.theme.fontWeights.normal};
  transition: color 0.2s ease;
  &:hover {
    text-decoration: none;
  }
`;

StyledNavLink.defaultProps = {
  color: 'gray.7'
};

export default StyledNavLink;
