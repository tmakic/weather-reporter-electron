import React, { useContext } from 'react';
import { CurrentWeatherContext } from '../contexts/currentWeatherContext';

export const WeatherInfo = () => {
  const currentWeather = useContext(CurrentWeatherContext);
  return (
    <>
      <h1>This is WeatherInfo component</h1>
      <div>{JSON.stringify(currentWeather)}</div>
    </>
  );
};
