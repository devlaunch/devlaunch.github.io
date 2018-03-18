import styled from 'styled-components';
import { Button } from 'rebass';

const StyledButton = styled(Button)`
  cursor: pointer;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  &:hover {
    text-decoration: none;
    color: ${props => props.color};
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.blue[5]};
  }
`;

StyledButton.defaultProps = {
  color: 'white',
  bg: 'blue.4'
}

StyledButton.Big = styled(StyledButton)``;

StyledButton.Big.defaultProps = {
  fontSize: 2,
  px: 4,
  py: 3
}

export default StyledButton;