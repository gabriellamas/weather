import React from 'react';
import PropTypes from 'prop-types';
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

const Main = ({ children }) => (
  <Wrapper container>
    <Grid item className="content">
      {children}
    </Grid>
  </Wrapper>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
  ])
}

export default Main;
