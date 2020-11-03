import styled from 'styled-components';
import {
  Grid
} from '@material-ui/core';

export const Wrapper = styled(Grid)`
  width: 100%;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
  .content {
    box-sizing: border-box;
    width: 100%;
    max-width: 680px;
    padding: 20px;
  }
`;