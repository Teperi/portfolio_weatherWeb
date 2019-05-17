import React from 'react';

// css
import './ForecastLinecard.scss';

import { WeatherTypeText } from '../functions/changeWeatherData';

// 현재 시간 확인(일몰 및 일출시간 노출시 확인)
const nowTime = Date.now();

const ForecastLinecard = ({ weatherType }) => {
  return (
    <div className='forecast_lineCard'>
      <div className='forecast_lineCard_line' />
      <div className='forecast_lineCard_left' />
      <div className='forecast_lineCard_right'>
        <p className='nextTimeTitle'>잠시 후</p>
        <p className='nextWeatherTitle'>{WeatherTypeText(weatherType)}</p>
      </div>
    </div>
  );
};

export default ForecastLinecard;
