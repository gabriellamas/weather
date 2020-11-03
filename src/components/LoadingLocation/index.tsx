import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import UserCtx from 'contexts/user';
import { Spinner } from 'elements';
import { Container } from './styles';

const LoadingLocation = (): JSX.Element => {
  const { geolocation, address } = useContext(UserCtx);
  return (
    <Container
      className={
        (
          (geolocation.value && address.value) ||
          geolocation.browserError ||
          geolocation.error
        ) ? 'out' : ''
      }
    >
      <Spinner />
      <Typography>
        Estamos aguardando sua localização.
      </Typography>
    </Container>
  )
}

export default LoadingLocation;