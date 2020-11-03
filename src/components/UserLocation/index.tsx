import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import UserCtx from 'contexts/user';

const Center = styled.div`
  width: 100%;
  text-align: center;
`;

const UserLocation = (): JSX.Element => {
  const { geolocation, address } = useContext(UserCtx);  

  return (
    <>
      {
        address.value && (
          <Center>
            <Typography variant="h6">
              {address.value}
            </Typography>
          </Center>
        )
      }
      {
        !geolocation.value && geolocation.error && (
          <>
            <Typography variant="h4">
              Seu navegador está bloqueando o acesso à sua localização :(
            </Typography>
            <Typography>
              Entre nas configurações da URL e habilite o compartilhamento da localização.
            </Typography>
          </>
        )
      }
      {
        !geolocation.value && geolocation.browserError && (
          <>
            <Typography variant="h4">
              Puxa! Seu navegador não consegue nos falar onde você está :(
            </Typography>
            <Typography>
              Alguns navegadores, em grande parte antigos, não tem a funcionalidade que nos dá acesso a sua localização. Tente em um outro navegador.
            </Typography>
          </>
        )
      }
    </>
  )
}

export default UserLocation;
