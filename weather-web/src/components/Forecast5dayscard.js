import React from 'react';

import { WeatherTypeColorWithHours } from '../functions/changeWeatherData';
import { IconContext } from 'react-icons';
import { FaCircle } from 'react-icons/fa';

import './Forecast5dayscard.scss';

const Forecast5dayscard = ({ forecast }) => {
  const style = WeatherTypeColorWithHours(forecast[0].weatherType, 0, 10000000000000);
  const bgColor = {
    background: style.bgColor,
    color: style.textColor
  };
  return (
    <div className='forecast_card_5days' style={bgColor}>
      <IconContext.Provider
        value={{ color: '#fdfdfd', className: 'forecast_card_5days_topcircle' }}
      >
        <FaCircle />
      </IconContext.Provider>
    </div>
  );
};

export default Forecast5dayscard;
