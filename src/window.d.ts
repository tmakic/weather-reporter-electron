import { ApiResponse, Coord } from './types';

declare global {
  interface Window {
    weather: {
      fetchCurrentWeather: (coord: Coord | undefined) => Promise<ApiResponse.GetWeather>;
      fetchForecastList: (coord: Coord | undefined) => Promise<ApiResponse.GetForecastList>;
    };
  }
}
