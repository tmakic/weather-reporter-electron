import React, { useEffect, useState } from 'react';
import './App.css';

interface ElectronWindow extends Window {
  weather: {
    fetchCurrentWeather: () => Promise<any>; // TODO: any回避
  };
}

declare const window: ElectronWindow;

export const App = () => {
  const [weather, setWeather] = useState("default")

  useEffect(() => {
    window.weather.fetchCurrentWeather().then(response => {
      setWeather(JSON.stringify(response))
    })
  }, [])

  return (
    <div className="container">
      <h1>Hello.</h1>
      <p>{weather}</p>
    </div>
  );
};