import { ApiResponse } from './types';

declare global {
  interface Window {
    weather: {
      fetchCurrentWeather: () => Promise<ApiResponse.GetWeather>;
      fetchForecastList: () => Promise<ApiResponse.GetForecastList>;
    };
  }
}
