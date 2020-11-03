import React from 'react';
import svg from './Spinner.svg';

const Spinner = (): JSX.Element => (
  <img src={svg} alt="Carregando..." title="Carregando..." />
);

export default Spinner;
