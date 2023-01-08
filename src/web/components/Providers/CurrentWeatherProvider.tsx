import React, { ReactNode, useEffect, useState } from 'react';
import { CurrentWeatherContext } from '../../contexts/currentWeatherContext';
import { CurrentWeather } from '../../../types';
import { formatDate } from '../../utils/DateUtils';
import { roundNum } from '../../utils/NumberUtils';
import { useGeolocation } from '../../hooks/useGeolocation';

export const CurrentWeatherProvider = (props: { children: ReactNode }) => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>();
  const { coord } = useGeolocation();

  useEffect(() => {
    window.weather.fetchCurrentWeather(coord).then((data) => {
      if (!data) return;
      setCurrentWeather({
        datetime: formatDate(data.dt, 'YYYY/M/D(dd)'),
        feels_like: roundNum(data.main.feels_like),
        temp: roundNum(data.main.temp),
        temp_max: roundNum(data.main.temp_max),
        temp_min: roundNum(data.main.temp_min),
        weather: data.weather[0],
      });
    });
  }, [coord]);

  return <CurrentWeatherContext.Provider value={currentWeather}>{props.children}</CurrentWeatherContext.Provider>;
};
