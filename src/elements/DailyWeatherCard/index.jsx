import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Grid,
  Typography
} from '@material-ui/core';
import styled from 'styled-components';

const Content = styled(Grid)`
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

const DailyWeather = ({ day, min, max }) => (
  <Card
    variant="outlined"
  >
    <Content container spacing={2}>
      <Grid item>
        <Typography>
          {day}
        </Typography>
      </Grid>
      <Grid className="values" item>
        <Grid item>
          <Typography variant="body2">
            <small>
              Max.
            </small>
            <br />
            <span className="value">
              {max}
            </span>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" className="min">
            <small>
              Min.
            </small>
            <br />
            <span className="value">
              {min}
            </span>
          </Typography>
        </Grid>
      </Grid>
    </Content>
  </Card>
);

DailyWeather.propTypes = {
  day: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
}

export default DailyWeather;
