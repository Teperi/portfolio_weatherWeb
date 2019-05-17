import React from 'react';

// Icon 설정 파일
import { IconContext } from 'react-icons';
// 디자인 circle 가져오기
import { FaCircle } from 'react-icons/fa';

// 날씨데이터에 따른 데이터 가공 함수 모음
import { WeatherTypeIcon, WeatherTypeColor, WeatherTypeText } from '../functions/changeWeatherData';

import './ForecastNext24.scss';

const ForecastNext24 = ({ weatherType, sunrise, sunset }) => {
  console.log(weatherType);
  const style = WeatherTypeColor(weatherType, sunrise, sunset);
  const bgColor = {
    background: style.bgColor,
    color: style.textColor
  };
  return (
    <div className='forecast_card_next24' style={bgColor}>
      <IconContext.Provider
        value={{ color: '#fdfdfd', className: 'forecast_card_next24_topcircle' }}
      >
        <FaCircle />
      </IconContext.Provider>
      <div className='forecast_card_next24_left'>
        <IconContext.Provider value={{ size: '3.5em' }}>
          <WeatherTypeIcon type={weatherType} sunrise={sunrise} sunset={sunset} />
        </IconContext.Provider>
      </div>
      <div className='forecast_card_next24_right'>
        <p className='tomorrowTimeTitle'>다음 24시간</p>
        <p className='tomorrowWeatherTitle'>{WeatherTypeText(weatherType)}</p>
      </div>
      <IconContext.Provider
        value={{ color: '#fdfdfd', className: 'forecast_card_next24_bottomcircle' }}
      >
        <FaCircle />
      </IconContext.Provider>
    </div>
  );
};

export default ForecastNext24;
