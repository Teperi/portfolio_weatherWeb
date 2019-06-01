import React from 'react';

// Icon 설정 파일
import { IconContext } from 'react-icons';
// 디자인 circle 가져오기
import { FaCircle } from 'react-icons/fa';

// 날씨데이터에 따른 데이터 가공 함수 모음
import {
  WeatherTypeText,
  WeatherTypeIconWithForecast,
  WeatherTypeColorWithForecast
} from '../functions/changeWeatherData';

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

const ForecastNext24 = ({ forecast, sunrise, sunset }) => {
  const next24Info = forecast.reduce(forecastReducer, []);
  const style = WeatherTypeColorWithForecast(next24Info);
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
          <WeatherTypeIconWithForecast array={next24Info} />
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
