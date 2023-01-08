import path from 'node:path';
import { BrowserWindow, app, ipcMain } from 'electron';
import axiosBase from 'axios';
import { ApiResponse, Coord } from './types';

app.whenReady().then(() => {
  // アプリの起動イベント発火で BrowserWindow インスタンスを作成
  const mainWindow = new BrowserWindow({
    webPreferences: {
      // webpack が出力したプリロードスクリプトを読み込み
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.webContents.openDevTools();

  // レンダラープロセスをロード
  mainWindow.loadFile('dist/index.html');
});

const axios = axiosBase.create({
  baseURL: process.env.REACT_APP_WEATHER_API_BASE_URL,
});

const fetchCurrentWeather = async (coord: Coord) => {
  debugger; // eslint-disable-line no-debugger
  if (!coord || !coord.lat || !coord.lon) return;
  const response = await axios.get<ApiResponse.GetWeather>('/weather', {
    params: {
      lat: coord.lat,
      lon: coord.lon,
      units: 'metric',
      lang: 'jp',
      appid: process.env.REACT_APP_WEATHER_API_KEY,
    },
  });
  return response.data;
};

const fetchForecastList = async (coord: Coord) => {
  if (!coord || !coord.lat || !coord.lon) return;
  const response = await axios.get<ApiResponse.GetForecastList>('/forecast', {
    params: {
      lat: coord.lat,
      lon: coord.lon,
      units: 'metric',
      lang: 'jp',
      appid: process.env.REACT_APP_WEATHER_API_KEY,
    },
  });
  return response.data;
};

ipcMain.handle('current-weather', async (_event, coord) => {
  return fetchCurrentWeather(coord);
});
ipcMain.handle('forecast', async (_event, coord) => {
  return fetchForecastList(coord);
});

// すべてのウィンドウが閉じられたらアプリを終了する
app.once('window-all-closed', () => app.quit());
