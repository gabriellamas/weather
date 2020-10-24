import React, { useContext, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
import { Typography } from '@material-ui/core';
import UserCtx from 'contexts/user';
import { openWeather } from 'helpers/requests';

const Container = styled(Typography)`
  text-align: center;
  margin: 20px 0 !important;
  height: 112px;
`

const CurrentWeather = () => {
  const { geolocation } = useContext(UserCtx);
  const [weather, setWeather] = useState();

  const getCurrent = useCallback(async (lat, lng) => {
    try {
      const { data } = await openWeather.getCurrentWeather(lat, lng);
      setWeather(Math.round(data.main.temp));
    } catch(e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    if (geolocation.value) getCurrent(geolocation.value.latitude, geolocation.value.longitude);
  }, [geolocation.value])

  return !geolocation.error && !geolocation.browserError && geolocation.value ? (
    <Container variant="h1">
      {
        weather ? <>
          <b>
            <CountUp start={0} end={weather} />
          </b>
          °
        </> : ''
      }
    </Container>
  ) : ''
}

export default CurrentWeather;
