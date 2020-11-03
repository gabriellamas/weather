import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const UserCtx = createContext();

export const UserProvider = ({ children }) => {
  const [geolocation, setGeolocation] = useState();
  const [geolocationError, setGeolocationError] = useState(false);
  const [browserError, setBrowserError] = useState(false);
  const [address, setAddress] = useState();

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

export const withUser = (Component) => (
  () => (
    <UserProvider>
      <Component />
    </UserProvider>
  )
);

withUser.propTypes = {
  Component: PropTypes.element.isRequired,
};

export default UserCtx;
