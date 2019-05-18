import React from 'react';

// css
import './ForecastLinecard.scss';

import { WeatherTypeText } from '../functions/changeWeatherData';

const ForecastLinecard = ({ text, weatherType }) => {
  return (
    <div className='forecast_lineCard'>
      <div className='forecast_lineCard_line' />
      <div className='forecast_lineCard_left' />
      {text === '잠시 후' ? (
        <div className='forecast_lineCard_right'>
          <p className='nextTimeTitle'>{text}</p>
          <p className='nextWeatherTitle'>{WeatherTypeText(weatherType)}</p>
        </div>
      ) : (
        <div className='forecast_lineCard_right'>
          <p className='nextTimeTitle'>{text}</p>
        </div>
      )}
    </div>
  );
};

export default ForecastLinecard;
