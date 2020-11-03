import React from 'react';
import {
  Card,
  Grid,
  Typography
} from '@material-ui/core';
import { Content } from './styles';

interface IProps {
  day: string,
  min: number,
  max: number
}

const DailyWeather = ({ day, min, max }: IProps): JSX.Element => (
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

export default DailyWeather;
