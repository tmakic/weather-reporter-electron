import React, { useEffect, useState } from 'react';
import './App.css';

import { ApiResponse, CurrentWeather, DisplayForecast } from './types';
import { formatDate } from './utils/DateUtils';
import { roundNum } from './utils/NumberUtils';

interface ElectronWindow extends Window {
  weather: {
    fetchCurrentWeather: () => Promise<ApiResponse.GetWeather>;
    fetchForecastList: () => Promise<ApiResponse.GetForecastList>;
  };
}

declare const window: ElectronWindow;

export const App = () => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>();
  const [forecastList, setForecastList] = useState<DisplayForecast[]>();

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
    window.weather.fetchForecastList().then((data) => {
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
  }, []);

  return (
    <div className="container">
      <h1>currentWeather</h1>
      <p>{JSON.stringify(currentWeather)}</p>
      <h1>forecast</h1>
      <p>{JSON.stringify(forecastList)}</p>
    </div>
  );
};
