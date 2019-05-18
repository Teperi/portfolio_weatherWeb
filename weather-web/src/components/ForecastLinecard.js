import React from 'react';

// css
import './ForecastLinecard.scss';

import { WeatherTypeText } from '../functions/changeWeatherData';

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
