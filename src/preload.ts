const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('weather', {
  fetchCurrentWeather: () => ipcRenderer.invoke('signal')
});