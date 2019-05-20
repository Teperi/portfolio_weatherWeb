import React from 'react';

import {
  WeatherTypeColorWithForecast,
  WeatherTypeIconWithForecast,
  WeatherTypeText
} from '../functions/changeWeatherData';
import { IconContext } from 'react-icons';
import { FaCircle } from 'react-icons/fa';

import './Forecast4dayscard.scss';

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
const ForecastTextloop = arr => {
  return arr
    .map((value, index) => {
      if (index === 0) {
        return WeatherTypeText(value.weatherType);
      } else {
        return `${value.dt_day !== arr[index - 1].dt_day ? ` 내일` : ``} ${
          value.dt_hours <= 12 ? `오전 ${value.dt_hours}` : `오후 ${value.dt_hours - 12}`
        }시 부터 ${WeatherTypeText(value.weatherType)}`;
      }
    })
    .toString();
};

// TODO: 가장 낮은 온도와 가장 높은 온도 뽑아내기
const tempReducer = (accumulator, obj, index, array) => {
  if (accumulator[0] === undefined) {
    accumulator.push(obj.temp);
  }
  return accumulator;
};

const Forecast4dayscard = ({ forecast, today }) => {
  // 넘어온 날씨 예보 정보를 날짜별로 추리기
  const forecast_classifi = new Array();
  for (let i = 1; i < 5; i++) {
    const dayCheck = today.getDate() + i;
    forecast_classifi.push(
      forecast.filter(obj => {
        return obj.dt_day === dayCheck;
      })
    );
  }

  const forecast_dayInfo = forecast_classifi.map(arr => {
    return arr.reduce(forecastReducer, []);
  });

  console.log(forecast_dayInfo);

  // 각 날짜별 색 설정
  const bgColor = new Array();
  for (const arr of forecast_classifi) {
    const style = WeatherTypeColorWithForecast(arr);
    bgColor.push({
      background: style.bgColor,
      color: style.textColor,
      boxShadow: style.shadow
    });
  }

  return (
    <div className='forecast_card_4days'>
      <IconContext.Provider
        value={{ color: '#fdfdfd', className: 'forecast_card_4days_topcircle' }}
      >
        <FaCircle />
      </IconContext.Provider>
      <div className='forecast_card_4days_dayTop' style={bgColor[0]}>
        <div className='forecast_card_4days_dayTop_left'>
          <IconContext.Provider value={{ size: '3.5em' }}>
            <WeatherTypeIconWithForecast array={forecast_classifi[0]} />
          </IconContext.Provider>
        </div>
        <div className='forecast_card_4days_dayTop_center'>
          <p className='forecast_card_4days_dayTop_center_timeTitle'>
            내일 ({forecast_classifi[0][0].dt_day}일)
          </p>
          <p className='forecast_card_4days_dayTop_center_weatherTitle'>
            {ForecastTextloop(forecast_dayInfo[0])}
          </p>
        </div>
        <div className='forecast_card_4days_dayTop_right' />
      </div>
      <div className='forecast_card_4days_day' style={bgColor[1]}>
        <div className='forecast_card_4days_day_left'>
          <IconContext.Provider value={{ size: '3.5em' }}>
            <WeatherTypeIconWithForecast array={forecast_classifi[1]} />
          </IconContext.Provider>
        </div>
        <div className='forecast_card_4days_day_center'>
          <p className='forecast_card_4days_day_center_timeTitle'>
            모레({forecast_classifi[1][0].dt_day}일)
          </p>
          <p className='forecast_card_4days_day_center_weatherTitle'>
            {ForecastTextloop(forecast_dayInfo[1])}
          </p>
        </div>
        <div className='forecast_card_4days_day_right' />
      </div>
      <div className='forecast_card_4days_day' style={bgColor[2]}>
        <div className='forecast_card_4days_day_left'>
          <IconContext.Provider value={{ size: '3.5em' }}>
            <WeatherTypeIconWithForecast array={forecast_classifi[2]} />
          </IconContext.Provider>
        </div>
        <div className='forecast_card_4days_day_center'>
          <p className='forecast_card_4days_day_center_timeTitle'>
            {forecast_dayInfo[2][0].dt_day}일
          </p>
          <p className='forecast_card_4days_day_center_weatherTitle'>
            {ForecastTextloop(forecast_dayInfo[2])}
          </p>
        </div>
        <div className='forecast_card_4days_day_right' />
      </div>
      <div className='forecast_card_4days_dayBottom' style={bgColor[3]}>
        <div className='forecast_card_4days_dayBottom_left'>
          <IconContext.Provider value={{ size: '3.5em' }}>
            <WeatherTypeIconWithForecast array={forecast_classifi[3]} />
          </IconContext.Provider>
        </div>
        <div className='forecast_card_4days_dayBottom_center'>
          <p className='forecast_card_4days_dayBottom_center_timeTitle'>
            {forecast_classifi[3][0].dt_day}일
          </p>
          <p className='forecast_card_4days_dayBottom_center_weatherTitle'>
            {ForecastTextloop(forecast_dayInfo[3])}
          </p>
        </div>
        <div className='forecast_card_4days_dayBottom_right' />
      </div>
    </div>
  );
};

export default Forecast4dayscard;
