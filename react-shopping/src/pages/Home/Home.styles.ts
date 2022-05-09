import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
 margin-bottom: 40px;
  //padding-top: 20px;
`;

export const StyledButton = styled(IconButton)`
 position: absolute;
  z-index: 100;
  right: 60px;
  top: 20px;
  color: white;
`;