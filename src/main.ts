import path from 'node:path';
import { BrowserWindow, app, ipcMain } from 'electron';
import axiosBase from 'axios';
import { ApiResponse } from './types';

app.whenReady().then(() => {
  // アプリの起動イベント発火で BrowserWindow インスタンスを作成
  const mainWindow = new BrowserWindow({
    webPreferences: {
      // webpack が出力したプリロードスクリプトを読み込み
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // レンダラープロセスをロード
  mainWindow.loadFile('dist/index.html');
});

const axios = axiosBase.create({
  baseURL: process.env.REACT_APP_WEATHER_API_BASE_URL,
});

const fetchCurrentWeather = async () => {
  const response = await axios.get<ApiResponse.GetWeather>('/weather', {
    params: {
      lat: 35.681236,
      lon: 139.767125,
      units: 'metric',
      lang: 'jp',
      appid: process.env.REACT_APP_WEATHER_API_KEY,
    },
  });
  return response.data;
};

const fetchForecastList = async () => {
  const response = await axios.get<ApiResponse.GetForecastList>('/forecast', {
    params: {
      lat: 35.681236,
      lon: 139.767125,
      units: 'metric',
      lang: 'jp',
      appid: process.env.REACT_APP_WEATHER_API_KEY,
    },
  });
  return response.data;
};

ipcMain.handle('current-weather', fetchCurrentWeather);
ipcMain.handle('forecast', fetchForecastList);

// すべてのウィンドウが閉じられたらアプリを終了する
app.once('window-all-closed', () => app.quit());
