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
  if (arr.length === 1) {
    return WeatherTypeText(arr[0].weatherType);
  } else if (arr.length === 2) {
    return arr
      .map((value, index) => {
        if (index === 0) {
          return WeatherTypeText(value.weatherType);
        } else {
          if (value.dt_hours === 0) {
            return ` 내일 오전 12시부터 ${WeatherTypeText(value.weatherType)}`;
          } else if (value.dt_hours < 12) {
            return `${value.dt_day !== arr[index - 1].dt_day ? ` 내일` : ``} 오전 ${
              value.dt_hours
            }시부터 ${WeatherTypeText(value.weatherType)}`;
          } else if (value.dt_hours === 12) {
            return `${value.dt_day !== arr[index - 1].dt_day ? ` 내일` : ``} 오후 ${
              value.dt_hours
            }시부터 ${WeatherTypeText(value.weatherType)}`;
          } else {
            return `${value.dt_day !== arr[index - 1].dt_day ? ` 내일` : ``} 오후 ${value.dt_hours -
              12}시부터 ${WeatherTypeText(value.weatherType)}`;
          }
        }
      })
      .toString();
  } else if (arr.length === 3) {
    const weatherText1 = WeatherTypeText(arr[0].weatherType);
    let weatherText2, weatherText3, twoPeriods2;
    if (arr[1].dt_hours === 0) {
      weatherText2 = ` 내일 오전 12시 ~`;
      twoPeriods2 = '오전';
    } else if (arr[1].dt_hours < 12) {
      weatherText2 = `${arr[1].dt_day !== arr[0].dt_day ? ` 내일` : ``} 오전 ${
        arr[1].dt_hours
      }시 ~`;
      twoPeriods2 = '오전';
    } else if (arr[1].dt_hours === 12) {
      weatherText2 = `${arr[1].dt_day !== arr[0].dt_day ? ` 내일` : ``} 오후 ${
        arr[1].dt_hours
      }시 ~`;
      twoPeriods2 = '오후';
    } else {
      weatherText2 = `${arr[1].dt_day !== arr[0].dt_day ? ` 내일` : ``} 오후 ${arr[1].dt_hours -
        12}시 ~`;
      twoPeriods2 = '오후';
    }
    if (arr[2].dt_hours === 0) {
      weatherText3 = ` 내일 오전 12시`;
    } else if (arr[2].dt_hours < 12) {
      weatherText3 = `${arr[2].dt_day !== arr[1].dt_day ? ` 내일` : ``} ${
        twoPeriods2 === '오전' ? `` : ` 오전`
      } ${arr[2].dt_hours}시`;
    } else if (arr[2].dt_hours === 12) {
      weatherText3 = `${arr[2].dt_day !== arr[1].dt_day ? ` 내일` : ``} 오후 ${arr[2].dt_hours}시`;
    } else {
      weatherText3 = `${arr[2].dt_day !== arr[1].dt_day ? ` 내일` : ``} ${
        twoPeriods2 === '오후' ? `` : ` 오후`
      } ${arr[2].dt_hours - 12}시`;
    }
    if (arr[0].weatherType === arr[2].weatherType) {
      return `${weatherText1},${weatherText2}${weatherText3} ${WeatherTypeText(
        arr[1].weatherType
      )}`;
    } else {
      return `${weatherText1},${weatherText2}${weatherText3} ${WeatherTypeText(
        arr[1].weatherType
      )}, 이후 ${WeatherTypeText(arr[2].weatherType)}`;
    }
  } else {
    const weatherTime = arr.map((value, index) => {
      if (value.dt_hours === 0) {
        return { twoPeriods: '오전', day: value.dt_day, hours: 12 };
      } else if (value.dt_hours < 12) {
        return { twoPeriods: '오전', day: value.dt_day, hours: value.dt_hours };
      } else if (value.dt_hours === 12) {
        return { twoPeriods: '오후', day: value.dt_day, hours: 12 };
      } else {
        return { twoPeriods: '오후', day: value.dt_day, hours: value.dt_hours - 12 };
      }
    });

    return arr
      .map((value, index) => {
        if (index === 0) {
          return WeatherTypeText(value.weatherType);
        } else if (index < weatherTime.length - 1) {
          if (value.dt_day !== weatherTime[index - 1].day) {
            return ` 내일 ${weatherTime[index].twoPeriods} ${weatherTime[index].hours}시 ~ ${
              weatherTime[index].day === weatherTime[index + 1].day
                ? `${
                    weatherTime[index].twoPeriods === weatherTime[index + 1].twoPeriods
                      ? ``
                      : `${weatherTime[index + 1].twoPeriods}`
                  }`
                : `${weatherTime[index + 1].twoPeriods}`
            } ${weatherTime[index + 1].hours}시 사이 ${WeatherTypeText(value.weatherType)}`;
          } else {
            return ` ${weatherTime[index].twoPeriods} ${weatherTime[index].hours}시 ~ ${
              weatherTime[index].day === weatherTime[index + 1].day
                ? `${
                    weatherTime[index].twoPeriods === weatherTime[index + 1].twoPeriods
                      ? ``
                      : `${weatherTime[index + 1].twoPeriods}`
                  }`
                : `내일 ${weatherTime[index + 1].twoPeriods}`
            } ${weatherTime[index + 1].hours}시 사이 ${WeatherTypeText(value.weatherType)}`;
          }
        } else {
          return ` 이후 ${WeatherTypeText(value.weatherType)}`;
        }
      })
      .toString();
  }
};

// 가장 낮은 온도와 가장 높은 온도 뽑아내기
const tempReducer = (accumulator, obj, index, array) => {
  if (accumulator[0] === undefined) {
    accumulator[0] = obj.temp;
    accumulator[1] = obj.temp;
  } else if (accumulator[0] > obj.temp) {
    accumulator[0] = obj.temp;
  } else if (accumulator[1] < obj.temp) {
    accumulator[1] = obj.temp;
  }
  return accumulator;
};

const Forecast4dayscard = ({ forecast, today }) => {
  // 넘어온 날씨 예보 정보를 날짜별로 추리기
  let forecast_classifi = [];
  for (let i = 1; i < 5; i++) {
    const lastday = new Date(today.getYear(), today.getMonth(), 0).getDate();
    let dayCheck;
    const dayCount = today.getDate() + i;
    if (dayCount > lastday) {
      dayCheck = dayCount - lastday;
    } else {
      dayCheck = dayCount;
    }
    forecast_classifi.push(
      forecast.filter(obj => {
        return obj.dt_day === dayCheck;
      })
    );
  }

  const forecast_textInfo = forecast_classifi.map(arr => {
    return arr.reduce(forecastReducer, []);
  });

  const forecast_tempInfo = forecast_classifi.map(arr => {
    return arr.reduce(tempReducer, []);
  });

  // 각 날짜별 색 설정
  let bgColor = [];
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
            {ForecastTextloop(forecast_textInfo[0])}
          </p>
        </div>
        <div className='forecast_card_4days_dayTop_right'>
          <p className='forecast_card_4days_dayTop_right_tempTitle'>
            {forecast_tempInfo[0][0]}˚| {forecast_tempInfo[0][1]}˚&nbsp;
          </p>
        </div>
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
            {ForecastTextloop(forecast_textInfo[1])}
          </p>
        </div>
        <div className='forecast_card_4days_day_right'>
          <p className='forecast_card_4days_day_right_tempTitle'>
            {forecast_tempInfo[1][0]}˚| {forecast_tempInfo[1][1]}˚&nbsp;
          </p>
        </div>
      </div>
      <div className='forecast_card_4days_day' style={bgColor[2]}>
        <div className='forecast_card_4days_day_left'>
          <IconContext.Provider value={{ size: '3.5em' }}>
            <WeatherTypeIconWithForecast array={forecast_classifi[2]} />
          </IconContext.Provider>
        </div>
        <div className='forecast_card_4days_day_center'>
          <p className='forecast_card_4days_day_center_timeTitle'>
            {forecast_textInfo[2][0].dt_day}일
          </p>
          <p className='forecast_card_4days_day_center_weatherTitle'>
            {ForecastTextloop(forecast_textInfo[2])}
          </p>
        </div>
        <div className='forecast_card_4days_day_right'>
          <p className='forecast_card_4days_day_right_tempTitle'>
            {forecast_tempInfo[2][0]}˚| {forecast_tempInfo[2][1]}˚&nbsp;
          </p>
        </div>
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
            {ForecastTextloop(forecast_textInfo[3])}
          </p>
        </div>
        <div className='forecast_card_4days_dayBottom_right'>
          <p className='forecast_card_4days_dayBottom_right_tempTitle'>
            {forecast_tempInfo[3][0]}˚| {forecast_tempInfo[3][1]}˚&nbsp;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forecast4dayscard;
