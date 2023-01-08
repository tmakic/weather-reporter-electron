import { contextBridge, ipcRenderer } from 'electron';
import { Coord } from './types';

contextBridge.exposeInMainWorld('weather', {
  fetchCurrentWeather: (coord: Coord) => ipcRenderer.invoke('current-weather', coord),
  fetchForecastList: (coord: Coord) => ipcRenderer.invoke('forecast', coord),
});
