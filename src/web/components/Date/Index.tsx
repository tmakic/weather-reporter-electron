import React, { useContext } from 'react';
import { CurrentWeatherContext } from '../../contexts/currentWeatherContext';

import './Date.scss';

export const Date = () => {
  const currentWeather = useContext(CurrentWeatherContext);
  return <div className="Date">{currentWeather?.datetime}</div>;
};
