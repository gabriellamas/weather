import React, { useContext, useState, useEffect, useCallback } from 'react';
import dy from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import { Grid } from '@material-ui/core';
import UserCtx from 'contexts/user';
import { openWeather } from 'helpers/requests';
import { DailyWeatherCard } from 'elements';
import { Container, Content } from './styles';
import 'dayjs/locale/pt-br';

dy.extend(calendar);

interface IDaily {
  date: number,
  min: number,
  max: number
}

const ForecastWeather = (): JSX.Element => {
  const { geolocation } = useContext(UserCtx);
  const [daily, setDaily] = useState<IDaily[]>();

  const getForecast = useCallback(async (lat, lng) => {
    try {
      const { data } = await openWeather.getForecastWeather(lat, lng);
      setDaily(data.daily.map((day: IWeather.Daily) => ({
        date: day.dt,
        min: Math.round(day.temp.min),
        max: Math.round(day.temp.max),
      })));
    } catch(e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    if (geolocation.value) getForecast(geolocation.value.latitude, geolocation.value.longitude);
  }, [geolocation.value])

  return !geolocation.error && !geolocation.browserError && geolocation.value ? (
    <Container>
      <Content container spacing={2}>
        {daily && daily.filter(item => dy.unix(item.date).diff(dy(), 'day') < 6).map(day => (
          <Grid item key={dy.unix(day.date).format()}>
            <DailyWeatherCard
              day={dy.unix(day.date).locale('pt-br').calendar('', {
                sameDay: '[Hoje]',
                nextDay: '[Amanhã]',
                nextWeek: 'dddd',
                sameElse: 'DD [de] MMMM'
              })}
              max={day.max}
              min={day.min}
            />
          </Grid>
        ))}
      </Content>
    </Container>
  ) : <div />;
}

export default ForecastWeather;
