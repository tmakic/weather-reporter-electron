import React from 'react';
import './App.css';

import { CurrentWeatherProvider } from './components/Providers/CurrentWeatherProvider';
import { ForecastProvider } from './components/Providers/ForecastProvider';

import { WeatherInfo } from './components/WeatherInfo';
import { Date } from './components/Date/Index';
import { Chart } from './components/Chart';

export const App = () => {
  return (
    <div className="container">
      <CurrentWeatherProvider>
        <Date />
        <WeatherInfo />
      </CurrentWeatherProvider>
      <ForecastProvider>
        <Chart />
      </ForecastProvider>
    </div>
  );
};
