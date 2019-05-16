import React, { Component } from 'react';

// Icon 불러오기
import { IconContext } from 'react-icons';

import { WiDaySunny } from 'react-icons/wi';
import { FaCircle } from 'react-icons/fa';

import './Forecast.scss';
import { _getForecastNowInfo } from '../functions/getData';

import ForecastNowcard from '../components/ForecastNowcard';

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
      <div className='forecast'>
        {state.isLoaded ? (
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
        ) : (
          <p style={{ color: 'white' }}>로딩중</p>
        )}

        <div className='forecast_lineCard'>
          <div className='forecast_lineCard_line' />
          <div className='forecast_lineCard_left' />
          <div className='forecast_lineCard_right'>
            <p className='nextTimeTitle'>잠시 후</p>
            <p className='nextWeatherTitle'>맑음</p>
          </div>
        </div>

        <div className='forecast_card'>
          <IconContext.Provider value={{ color: '#fdfdfd', className: 'forecast_card_topcircle' }}>
            <FaCircle />
          </IconContext.Provider>
          <div className='forecast_card_tomorrow'>
            <div className='forecast_card_tomorrow_left'>
              <IconContext.Provider value={{ size: '3.5em' }}>
                <WiDaySunny />
              </IconContext.Provider>
            </div>
            <div className='forecast_card_tomorrow_right'>
              <p className='tomorrowTimeTitle'>내일</p>
              <p className='tomorrowWeatherTitle'>맑음</p>
            </div>
          </div>
          <IconContext.Provider
            value={{ color: '#fdfdfd', className: 'forecast_card_bottomcircle' }}
          >
            <FaCircle />
          </IconContext.Provider>
        </div>
        <div className='forecast_lineCard'>
          <div className='forecast_lineCard_line' />
          <div className='forecast_lineCard_left' />
          <div className='forecast_lineCard_right'>
            <p className='nextTimeTitle'>다음 7일</p>
            <p className='nextWeatherTitle'>맑음</p>
          </div>
        </div>

        <div className='forecast_card'>
          <IconContext.Provider value={{ color: '#fdfdfd', className: 'forecast_card_topcircle' }}>
            <FaCircle />
          </IconContext.Provider>
          <div className='forecast_card_week'>
            <div className='forecast_card_week_1'>
              <div className='forecast_card_week_1_left'>
                <IconContext.Provider value={{ size: '3.5em' }}>
                  <WiDaySunny />
                </IconContext.Provider>
              </div>
              <div className='forecast_card_week_1_right'>
                <p className='week1Title'>오늘</p>
                <p className='week1WeatherTitle'>맑음</p>
              </div>
            </div>

            <div className='forecast_card_week_2'>
              <div className='forecast_card_week_2_left'>
                <IconContext.Provider value={{ size: '3.5em' }}>
                  <WiDaySunny />
                </IconContext.Provider>
              </div>
              <div className='forecast_card_week_2_right'>
                <p className='week2Title'>내일</p>
                <p className='week2WeatherTitle'>맑음</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
