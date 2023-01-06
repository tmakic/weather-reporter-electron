// const { contextBridge, ipcRenderer } = require('electron')
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('weather', {
  fetchCurrentWeather: () => ipcRenderer.invoke('signal')
});