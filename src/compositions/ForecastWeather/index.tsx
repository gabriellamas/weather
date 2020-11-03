import React, { useContext, useState, useEffect, useCallback } from 'react';
import dy from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import UserCtx from 'contexts/user';
import { openWeather } from 'helpers/requests';
import { DailyWeatherCard } from 'elements';
import 'dayjs/locale/pt-br';

dy.extend(calendar);

const Container = styled.div`
  height: 0px;
  overflow: hidden;
  animation: .5s uncollapse;
  animation-delay: 2s;
  animation-fill-mode: forwards;

  @keyframes uncollapse {
    0% {
      height: 0px;
    }
    100% {
      height: 644px;
    }
  }
`;

const Content = styled(Grid)`
  flex-direction: column;

  & > * {
    @keyframes fadeInRight {
      0% {
        opacity: 0;
        transform: translateX(-100px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }

    transform: translateX(-100px);
    opacity: 0;
    animation: .5s fadeInRight;
    animation-fill-mode: forwards;

    height: 76px;
    box-sizing: content-box !important;
    
    &:nth-child(1) {
      animation-delay: 1.5s;
    }
    &:nth-child(2) {
      animation-delay: 2s;
    }
    &:nth-child(3) {
      animation-delay: 2.5s;
    }
    &:nth-child(4) {
      animation-delay: 3s;
    }
    &:nth-child(5) {
      animation-delay: 3.5s;
    }
    &:nth-child(6) {
      animation-delay: 4s;
    }
    &:nth-child(7) {
      animation-delay: 4.5s;
    }
  }
`;

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
