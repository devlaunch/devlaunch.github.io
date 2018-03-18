import styled from 'styled-components';
import { Flex } from 'rebass';

const StyledContainerFooter = styled(Flex)`
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.05);
  margin-top: 1px;
`;

StyledContainerFooter.defaultProps = {
  color: 'gray.6',
  pt: 3,
  pb: 2 
};

export default StyledContainerFooter;