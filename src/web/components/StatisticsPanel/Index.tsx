import React from 'react';
import { roundNum } from '../../utils/NumberUtils';
import { ClothSearch } from '../ClothSearch';
import { TempType } from '../../../types';

import './statisticsPanel.scss';

export const StatisticsPanel = ({ title, temp, tempType }: { title: string; temp: number; tempType?: TempType }) => {
  return (
    <div className={'StatisticsPanel' + (tempType ? ` StatisticsPanel--${tempType}` : '')}>
      <span className="StatisticsPanel__Title">{title}</span>
      <span className="StatisticsPanel__Content">
        <span className="StatisticsPanel__Content__Num">{roundNum(temp)}</span>
        <span className="StatisticsPanel__Content__Unit">℃</span>
        <ClothSearch className="StatisticsPanel__Content__ClothSearch" type={tempType} temp={temp} />
      </span>
    </div>
  );
};
