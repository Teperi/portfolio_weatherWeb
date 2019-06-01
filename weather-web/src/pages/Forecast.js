import React, { Component } from 'react';

import './Forecast.scss';
import { _getForecastNowInfo, _getDateString, _getForecastNext5Info } from '../functions/getData';

import {
  ForecastHeader,
  ForecastNowcard,
  ForecastLinecard,
  ForecastNext24,
  Forecast4dayscard,
  ForecastChart
} from '../components';

const getWeatherData = async (lat, lon) => {
  const nowWeather = await _getForecastNowInfo(lat, lon);
  const nextWeather = await _getForecastNext5Info(lat, lon);
  return {
    nowWeather: {
      address: nowWeather.address,
      weatherType: nowWeather.weatherType,
      temp: nowWeather.temp,
      humidity: nowWeather.humidity,
      windSpeed: nowWeather.windSpeed,
      windDeg: nowWeather.windDeg,
      sunrise: nowWeather.sunrise,
      sunset: nowWeather.sunset,
      rain: nowWeather.rain
    },
    nextWeather
  };
};

const getNowDate = new Date();
const year = getNowDate.getFullYear();
const month = getNowDate.getMonth();
const day = getNowDate.getDate() + 1;
const hours = getNowDate.getHours();
const minute = getNowDate.getMinutes();
const Nextday = new Date(year, month, day, hours, minute);
export default class Forecast extends Component {
  state = {
    isLoaded: false,
    time: _getDateString(getNowDate),
    error: null,
    nowcard: null
  };

  componentDidMount() {
    getWeatherData(this.props.match.params.lat, this.props.match.params.lon).then(res =>
      this.setState({
        nowcard: res.nowWeather,
        forecastcard: res.nextWeather,
        isLoaded: true
      })
    );
  }

  render() {
    const state = this.state;
    return (
      <div>
        {state.isLoaded ? (
          <div className='forecast'>
            <ForecastHeader address={state.nowcard.address} nowTime={state.time} />
            <ForecastNowcard
              weatherType={state.nowcard.weatherType}
              temp={state.nowcard.temp}
              humidity={state.nowcard.humidity}
              windSpeed={state.nowcard.windSpeed}
              windDeg={state.nowcard.windDeg}
              sunrise={state.nowcard.sunrise}
              sunset={state.nowcard.sunset}
              rain={state.nowcard.rain}
              time={getNowDate.getTime()}
            />
            <ForecastLinecard text='잠시 후' weatherType={state.forecastcard[0].weatherType} />
            <ForecastNext24
              forecast={state.forecastcard.filter(obj => {
                return obj.dt <= Nextday;
              })}
              sunrise={state.nowcard.sunrise}
              sunset={state.nowcard.sunset}
            />
            <ForecastLinecard text='다음 4일' weatherType={''} />
            <Forecast4dayscard forecast={state.forecastcard} today={getNowDate} />
            <ForecastChart
              forecast={state.forecastcard.filter(value => {
                return value.dt <= Nextday;
              })}
            />
          </div>
        ) : (
          <div className='forecast'>
            <ForecastHeader address='' nowTime={state.time} />
            <p
              style={{
                textAlign: 'center',
                color: 'white',
                margin: 'auto',
                gridArea: '2 / 1 / 3 / span2'
              }}
            >
              로딩중...
            </p>
          </div>
        )}
      </div>
    );
  }
}
