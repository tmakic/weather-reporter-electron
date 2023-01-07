import { createContext } from 'react';
import { CurrentWeatherContextValue } from '../../types';

const defaultValue = undefined;

export const CurrentWeatherContext = createContext<CurrentWeatherContextValue>(defaultValue);
