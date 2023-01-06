import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('weather', {
  fetchCurrentWeather: () => ipcRenderer.invoke('current-weather'),
  fetchForecastList: () => ipcRenderer.invoke('forecast'),
});
