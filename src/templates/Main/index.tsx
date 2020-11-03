import React from 'react';
import {
  Grid
} from '@material-ui/core';
import { Wrapper } from './styles';

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
