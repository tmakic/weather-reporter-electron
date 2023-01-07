import React, { useContext } from 'react';
import { ForecastContext } from '../contexts/forcastContext';

export const Chart = () => {
  const forcastList = useContext(ForecastContext);
  return (
    <>
      <h1>This is Chart Component</h1>
      <div>{JSON.stringify(forcastList)}</div>
    </>
  );
};
