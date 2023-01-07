import React, { ReactNode, useEffect, useState } from 'react';
import { CurrentWeatherContext } from '../../contexts/currentWeatherContext';
import { CurrentWeather } from '../../../types';
import { formatDate } from '../../utils/DateUtils';
import { roundNum } from '../../utils/NumberUtils';

export const CurrentWeatherProvider = (props: { children: ReactNode }) => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>();

  useEffect(() => {
    window.weather.fetchCurrentWeather().then((data) => {
      setCurrentWeather({
        datetime: formatDate(data.dt, 'YYYY/M/D(dd)'),
        feels_like: roundNum(data.main.feels_like),
        temp: roundNum(data.main.temp),
        temp_max: roundNum(data.main.temp_max),
        temp_min: roundNum(data.main.temp_min),
        weather: data.weather[0],
      });
    });
  }, []);

  return <CurrentWeatherContext.Provider value={currentWeather}>{props.children}</CurrentWeatherContext.Provider>;
};
