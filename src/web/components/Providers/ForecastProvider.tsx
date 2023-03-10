import React, { ReactNode, useEffect, useState } from 'react';

import { ForecastContext } from '../../contexts/forcastContext';

import { ApiResponse, DisplayForecast } from '../../../types';
import { formatDate } from '../../utils/DateUtils';
import { roundNum } from '../../utils/NumberUtils';
import { useGeolocation } from '../../hooks/useGeolocation';

export const ForecastProvider = (props: { children: ReactNode }) => {
  const [forecastList, setForecastList] = useState<DisplayForecast[]>();
  const { coord } = useGeolocation();
  useEffect(() => {
    window.weather.fetchForecastList(coord).then((data) => {
      if (!data) return;
      const newForecasList = data.list.slice(0, 9).map((forecast: ApiResponse.Forecast) => {
        return {
          datetime: formatDate(forecast.dt, 'h:mm'),
          feels_like: roundNum(forecast.main.feels_like),
          temp: roundNum(forecast.main.temp),
          temp_max: roundNum(forecast.main.temp_max),
          temp_min: roundNum(forecast.main.temp_min),
          weather: forecast.weather[0],
          x_axis_data: `${formatDate(forecast.dt, 'h:mm')}/${forecast.weather[0].icon}`,
        };
      });
      setForecastList(newForecasList);
    });
  }, [coord]);
  return <ForecastContext.Provider value={forecastList}>{props.children}</ForecastContext.Provider>;
};
