import React from 'react';
import './App.scss';

import { CurrentWeatherProvider } from './components/Providers/CurrentWeatherProvider';
import { ForecastProvider } from './components/Providers/ForecastProvider';

import { Date } from './components/Date';
import { Summary } from './components/Summary';
import { Chart } from './components/Chart';

export const App = () => {
  return (
    <div className="App">
      <CurrentWeatherProvider>
        <Date />
        <Summary />
      </CurrentWeatherProvider>
      <ForecastProvider>
        <Chart />
      </ForecastProvider>
    </div>
  );
};
