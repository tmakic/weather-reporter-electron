export interface CurrentWeather {
  datetime: string;
  feels_like: number;
  temp: number;
  temp_max: number;
  temp_min: number;
  weather: Weather;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface DisplayForecast {
  datetime: string;
  feels_like: number;
  temp: number;
  temp_max: number;
  temp_min: number;
  weather: Weather;
  x_axis_data: string;
}

export interface Coord {
  lat: number;
  lon: number;
}

export namespace ApiResponse {
  export interface Forecast {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: Weather[];
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    sys: {
      pod: string;
    };
    dt_txt: string;
  }

  export interface GetForecastList {
    city: {
      id: number;
      name: string;
      coord: Coord;
      country: string;
      population: number;
      timezone: number;
      sunrise: number;
      sunset: number;
    };
    cnt: number;
    cod: string;
    list: Forecast[];
    message: number;
  }

  export interface GetWeather {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    visibility: number;
    wind: {
      speed: number;
      deg: number;
    };
    clouds: {
      all: number;
    };
    dt: number;
    sys: {
      type: number;
      id: number;
      country: string;
      sunrise: number;
      sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }
}
