import React from 'react';
import styled from 'styled-components';
import {
  Grid
} from '@material-ui/core';

const Wrapper = styled(Grid)`
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

interface IProps {
  children: React.ReactNode
}

const Main = ({ children }: IProps): JSX.Element => (
  <Wrapper container>
    <Grid item className="content">
      {children}
    </Grid>
  </Wrapper>
);

export default Main;
