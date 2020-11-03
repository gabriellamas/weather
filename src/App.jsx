import React, { useEffect, useContext } from 'react';
import { google } from 'helpers/requests';
import UserCtx, { withUser } from 'contexts/user';
import {
  ForecastWeather
} from 'compositions';
import {
  CurrentWeather,
} from 'elements';
import {
  UserLocation,
  LoadingLocation,
} from 'components';
import Main from 'templates/Main';
import GlobalStyle from './GlobalStyle';

const App = () => {
  const user = useContext(UserCtx);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async ({ coords }) => {
          try {
            const details = await google.getLocationDetails(coords.latitude, coords.longitude);
            if (details.data.error_message) {
              throw details.data.error_message;
            }
            const address = (
              details.data.results.find(
                item => item.types.find(type => type === 'sublocality_level_1')
              )
            )?.formatted_address;
            user.address.set(address);
          } catch(e) {
            console.error(e);
          }
          user.geolocation.set({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
        },
        () => user.geolocation.setError(true)
      );
    } else {
      user.geolocation.setBrowserError(true);
    }
  }, []);

  return (
    <Main>
      <GlobalStyle />
      <LoadingLocation />
      <UserLocation />
      <CurrentWeather />
      <ForecastWeather />
    </Main>
  )
};

export default withUser(App);
