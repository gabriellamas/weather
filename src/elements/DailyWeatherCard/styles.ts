import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const Content = styled(Grid)`
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  .values {
    display: flex;
    text-align: center;
    & > * {
      margin: 0 15px;
    }
    .min {
      opacity: 0.7;
    }
    .value {
      font-size: 1.5rem;
    }
  }
`;