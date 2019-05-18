import React from 'react';

// Icon 설정 파일
import { IconContext } from 'react-icons';
// 디자인 circle 가져오기
import { FaCircle } from 'react-icons/fa';

// 날씨데이터에 따른 데이터 가공 함수 모음
import { WeatherTypeIcon, WeatherTypeColor, WeatherTypeText } from '../functions/changeWeatherData';

import './ForecastNext24.scss';

// 다음 24시간의 날씨 변화를 감지해서 날씨가 바뀔 때만 array 에 저장
const forecastReducer = (accumulator, value, index, array) => {
  if (accumulator[0] === undefined) {
    accumulator.push(value);
  } else if (accumulator[accumulator.length - 1].weatherType !== value.weatherType) {
    accumulator.push(value);
  }
  return accumulator;
};

// 24시간동안 감지된 날씨 변화를 텍스트로 바꾸기
const next24Textloop = arr => {
  return arr
    .map((value, index) => {
      if (index === 0) {
        return WeatherTypeText(value.weatherType);
      } else {
        return `${value.dt_day !== arr[index - 1].dt_day ? ` ${value.dt_day}일` : ``} ${
          value.dt_hours <= 12 ? `오전 ${value.dt_hours}` : `오후 ${value.dt_hours - 12}`
        }시 부터 ${WeatherTypeText(value.weatherType)}`;
      }
    })
    .toString();
};

const ForecastNext24 = ({ forecast, sunrise, sunset }) => {
  const style = WeatherTypeColor(forecast[0].weatherType, sunrise, sunset);
  const bgColor = {
    background: style.bgColor,
    color: style.textColor
  };
  const next24Info = forecast.reduce(forecastReducer, []);
  console.log(next24Info);

  return (
    <div className='forecast_card_next24' style={bgColor}>
      <IconContext.Provider
        value={{ color: '#fdfdfd', className: 'forecast_card_next24_topcircle' }}
      >
        <FaCircle />
      </IconContext.Provider>
      <div className='forecast_card_next24_left'>
        <IconContext.Provider value={{ size: '3.5em' }}>
          <WeatherTypeIcon type={forecast[0].weatherType} sunrise={sunrise} sunset={sunset} />
        </IconContext.Provider>
      </div>
      <div className='forecast_card_next24_right'>
        <p className='tomorrowTimeTitle'>다음 24시간</p>
        <p className='tomorrowWeatherTitle'>{next24Textloop(next24Info)}</p>
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
