import React, { useContext, useState, useEffect, useCallback } from 'react';
import CountUp from 'react-countup';
import UserCtx from 'contexts/user';
import { openWeather } from 'helpers/requests';
import { Container } from './styles';

const CurrentWeather: React.FC = () => {
  const { geolocation } = useContext(UserCtx);
  const [weather, setWeather] = useState<number>();

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
  ) : <div />;
}

export default CurrentWeather;
