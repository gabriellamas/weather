import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

interface ILatLng {
  latitude: string | number,
  longitude: string | number,
}

interface IGeolocation {
  value?: ILatLng,
  error: boolean,
  browserError: boolean,
  set: (value: ILatLng) => void,
  setError: (value: boolean) => void,
  setBrowserError: (value: boolean) => void
}

interface IAddress {
  value?: string,
  set: (value: string) => void
}

interface ICtx {
  geolocation: IGeolocation,
  address: IAddress
}

const UserCtx = createContext<ICtx>({
  geolocation: {
    value: undefined,
    error: false,
    browserError: false,
    set: () => {},
    setError: () => {},
    setBrowserError: () => {}
  },
  address: {
    value: undefined,
    set: () => {},
  }
});

interface IProps {
  children: React.ReactNode
}

export const UserProvider = ({ children }: IProps): JSX.Element => {
  const [geolocation, setGeolocation] = useState<ILatLng>();
  const [geolocationError, setGeolocationError] = useState(false);
  const [browserError, setBrowserError] = useState(false);
  const [address, setAddress] = useState<string>();

  return (
    <UserCtx.Provider
      value={{
        geolocation: {
          value: geolocation,
          error: geolocationError,
          browserError,
          set: setGeolocation,
          setError: setGeolocationError,
          setBrowserError
        },
        address: {
          value: address,
          set: setAddress
        }
      }}
    >
      {children}
    </UserCtx.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};

export const withUser = (Component: React.ComponentType) => (
  function childrenComponent(): JSX.Element {
    return (
      <UserProvider>
        <Component />
      </UserProvider>
    )
  }
);

withUser.propTypes = {
  Component: PropTypes.element.isRequired,
};

export default UserCtx;
