import React, { Component } from 'react';

import './Forecast.scss';
import { _getForecastNowInfo } from '../functions/getData';

import ForecastNowcard from '../components/ForecastNowcard';
import ForecastHeader from '../components/ForecastHeader';

export default class Forecast extends Component {
  state = {
    isLoaded: false,
    error: null,
    nowcard: null
  };
  componentDidMount() {
    const test = async () => {
      const obj = await _getForecastNowInfo(
        this.props.match.params.lat,
        this.props.match.params.lon
      );
      console.log(obj);
      this.setState({
        nowcard: {
          address: obj.address,
          weatherType: obj.weatherType,
          temp: obj.temp,
          humidity: obj.humidity,
          windSpeed: obj.windSpeed,
          windDeg: obj.windDeg,
          sunrise: obj.sunrise,
          sunset: obj.sunset,
          rain: obj.rain
        },
        isLoaded: true
      });
    };
    test();
  }

  render() {
    const state = this.state;
    return (
      <div>
        {state.isLoaded ? (
          <div className='forecast'>
            <ForecastHeader address={state.nowcard.address} />
            <ForecastNowcard
              weatherType={state.nowcard.weatherType}
              temp={state.nowcard.temp}
              humidity={state.nowcard.humidity}
              windSpeed={state.nowcard.windSpeed}
              windDeg={state.nowcard.windDeg}
              sunrise={state.nowcard.sunrise}
              sunset={state.nowcard.sunset}
              rain={state.nowcard.rain}
            />
            <div className='forecast_lineCard'>
              <div className='forecast_lineCard_line' />
              <div className='forecast_lineCard_left' />
              <div className='forecast_lineCard_right'>
                <p className='nextTimeTitle'>잠시 후</p>
                <p className='nextWeatherTitle'>맑음</p>
              </div>
            </div>
          </div>
        ) : (
          <div className='forecast'>
            <div className='emptyHeader' />
            <p className='loadingText'>로딩중</p>
          </div>
        )}
      </div>
    );
  }
}
