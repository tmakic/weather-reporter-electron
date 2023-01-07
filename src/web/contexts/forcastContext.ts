import { createContext } from 'react';
import { ForecastContextValue } from '../../types';

const defaultValue = undefined;

export const ForecastContext = createContext<ForecastContextValue>(defaultValue);
