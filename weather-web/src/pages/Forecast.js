import React, { Component } from 'react';

import './Forecast.scss';
import { _getForecastNowInfo, _getNowTime } from '../functions/getData';

import { ForecastHeader, ForecastNowcard, ForecastLinecard, ForecastNext24 } from '../components';

const nowTime = Date.now();

const getWeatherData = async (lat, lon) => {
  const obj = await _getForecastNowInfo(lat, lon);
  console.log(obj);
  return {
    address: obj.address,
    weatherType: obj.weatherType,
    temp: obj.temp,
    humidity: obj.humidity,
    windSpeed: obj.windSpeed,
    windDeg: obj.windDeg,
    sunrise: obj.sunrise,
    sunset: obj.sunset,
    rain: obj.rain
  };
};

export default class Forecast extends Component {
  state = {
    isLoaded: false,
    time: _getNowTime(),
    error: null,
    nowcard: null
  };
  componentDidMount() {
    getWeatherData(this.props.match.params.lat, this.props.match.params.lon).then(res =>
      this.setState({
        nowcard: res,
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
              time={nowTime}
            />
            <ForecastLinecard weatherType={state.nowcard.weatherType} />
            <ForecastNext24
              weatherType={state.nowcard.weatherType}
              sunrise={state.nowcard.sunrise}
              sunset={state.nowcard.sunset}
            />
          </div>
        ) : (
          <div className='forecast'>
            <ForecastHeader address='' nowTime={state.time} />
            <p className='loadingText'>로딩중</p>
          </div>
        )}
      </div>
    );
  }
}
