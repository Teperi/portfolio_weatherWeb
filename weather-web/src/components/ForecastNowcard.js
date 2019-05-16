import React from 'react';

// Icon 불러오기
import { IconContext } from 'react-icons';
// 날씨에 맞는 아이콘 가져오기
import { WiCelsius, WiRain, WiHumidity, WiStrongWind, WiSunrise, WiSunset } from 'react-icons/wi';
// 디자인 circle 가져오기
import { FaCircle } from 'react-icons/fa';

// 날씨데이터에 따른 데이터 가공 함수 모음
import {
  WeatherTypeIcon,
  WeatherTypeColor,
  WeatherTypeText,
  WindDegreeToText,
  millisecondsToTime
} from '../functions/changeWeatherData';

// css
import './ForecastNowcard.scss';

// 현재 시간 확인(일몰 및 일출시간 노출시 확인)
const nowTime = Date.now();

const ForecastNowcard = ({
  weatherType,
  temp,
  humidity,
  windSpeed,
  windDeg,
  sunrise,
  sunset,
  rain
}) => {
  const style = WeatherTypeColor(weatherType, sunrise, sunset);
  const bgColor = {
    background: style.bgColor,
    color: style.textColor
  };
  return (
    <div className='forecast_card_now' style={bgColor}>
      <div className='forecast_card_now_Top'>
        <div className='forecast_card_now_Top_left'>
          <IconContext.Provider value={{ size: '3.5em' }}>
            <WeatherTypeIcon type={weatherType} sunrise={sunrise} sunset={sunset} />
          </IconContext.Provider>
        </div>
        <div className='forecast_card_now_Top_center'>
          <p className='timeTitle'>지금</p>
          <p className='weatherTitle'>{WeatherTypeText(weatherType)}</p>
        </div>
        <div className='forecast_card_now_Top_right'>
          <p className='temperatureTitle'>
            {temp}
            <WiCelsius />
          </p>
        </div>
      </div>
      <div className='forecast_card_now_Bottom'>
        {weatherType === 'rain' ? (
          <div className='forecast_card_now_Bottom_item'>
            <IconContext.Provider value={{ size: '2.5em', className: 'nowBottom_icon' }}>
              <WiRain />
            </IconContext.Provider>
            <p className='numberText1'>{rain} mm</p>
            <p className='subText1'>강수량</p>
          </div>
        ) : (
          <div className='forecast_card_now_Bottom_item'>
            <IconContext.Provider value={{ size: '2.5em', className: 'nowBottom_icon' }}>
              <WiHumidity />
            </IconContext.Provider>
            <p className='numberText1'>{humidity} %</p>
            <p className='subText1'>습도</p>
          </div>
        )}
        <div className='forecast_card_now_Bottom_item'>
          <IconContext.Provider value={{ size: '2.5em', className: 'nowBottom_icon' }}>
            <WiStrongWind />
          </IconContext.Provider>
          <p className='numberText2'>{windSpeed} m/s</p>
          <p className='subText2'>{WindDegreeToText(windDeg)}</p>
        </div>
        {nowTime >= sunrise && nowTime <= sunset ? (
          <div className='forecast_card_now_Bottom_item'>
            <IconContext.Provider value={{ size: '2.5em', className: 'nowBottom_icon' }}>
              <WiSunset />
            </IconContext.Provider>
            <p className='numberText3'>{millisecondsToTime(sunset)}</p>
            <p className='subText3'>일몰</p>
          </div>
        ) : (
          <div className='forecast_card_now_Bottom_item'>
            <IconContext.Provider value={{ size: '2.5em', className: 'nowBottom_icon' }}>
              <WiSunrise />
            </IconContext.Provider>
            <p className='numberText3'>{millisecondsToTime(sunrise)}</p>
            <p className='subText3'>일출</p>
          </div>
        )}
      </div>
      <IconContext.Provider value={{ color: '#fdfdfd', className: 'forecast_card_bottomcircle' }}>
        <FaCircle />
      </IconContext.Provider>
    </div>
  );
};

export default ForecastNowcard;
