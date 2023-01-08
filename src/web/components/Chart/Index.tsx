import React, { useContext } from 'react';
import { AreaChart, Area, LabelList, XAxis } from 'recharts';
import { ForecastContext } from '../../contexts/forcastContext';
import { XAxisTick } from './XAxisTick';
import { LabelContent } from './LabelContent';

import './Chart.scss';

export const Chart = () => {
  const forecastList = useContext(ForecastContext);
  return (
    <div>
      <AreaChart
        className="AreaChart"
        width={880}
        height={300}
        data={forecastList}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 50,
        }}
      >
        <XAxis
          dataKey="x_axis_data"
          interval={0}
          tick={XAxisTick}
          tickLine={{
            stroke: '#48484A',
            strokeWidth: 1,
            strokeLinecap: 'round',
          }}
          axisLine={{
            stroke: '#48484A',
            strokeWidth: 1,
            strokeLinecap: 'round',
          }}
        ></XAxis>
        <Area type="monotone" dataKey="temp" stroke="#F8D3CA" fill="#FAE2DC">
          <LabelList dataKey="temp" position="top" content={LabelContent} />
        </Area>
      </AreaChart>
    </div>
  );
};
