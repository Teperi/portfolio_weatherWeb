import React from 'react';

// Icon 설정 파일
import { IconContext } from 'react-icons';
// 날씨에 맞는 아이콘 가져오기
import { WiRain, WiHumidity, WiStrongWind, WiSunrise, WiSunset } from 'react-icons/wi';
// 디자인 circle 가져오기
import { FaCircle } from 'react-icons/fa';

// 날씨데이터에 따른 데이터 가공 함수 모음
import {
  WeatherTypeIconWithHours,
  WeatherTypeColorWithHours,
  WeatherTypeText,
  WindDegreeToText,
  millisecondsToTime
} from '../functions/changeWeatherData';

// css
import './ForecastNowcard.scss';

const ForecastNowcard = ({
  weatherType,
  temp,
  humidity,
  windSpeed,
  windDeg,
  sunrise,
  sunset,
  rain,
  time
}) => {
  const style = WeatherTypeColorWithHours(weatherType, sunrise, sunset);
  const bgColor = {
    background: style.bgColor,
    color: style.textColor
  };
  const shadow = {
    boxShadow: style.shadow
  };
  return (
    <div className='forecast_card_now' style={bgColor}>
      <div className='forecast_card_now_Top' style={shadow}>
        {/* 아이콘 */}
        <div className='forecast_card_now_Top_left'>
          <IconContext.Provider value={{ size: '4em' }}>
            <WeatherTypeIconWithHours type={weatherType} sunrise={sunrise} sunset={sunset} />
          </IconContext.Provider>
        </div>
        {/* 날씨 */}
        <div className='forecast_card_now_Top_center'>
          <p className='timeTitle'>지금</p>
          <p className='weatherTitle'>{WeatherTypeText(weatherType)}</p>
        </div>
        {/* 온도 */}
        <div className='forecast_card_now_Top_right'>
          <p className='temperatureTitle'>{temp}˚</p>
        </div>
      </div>
      <div className='forecast_card_now_Bottom'>
        {/* 비온다면 강수량, 비가 안오면 습도 표시*/}
        {weatherType === 'Rain' || weatherType === 'Drizzle' ? (
          <div className='forecast_card_now_Bottom_item'>
            <IconContext.Provider value={{ size: '2.5em', className: 'nowBottom_icon' }}>
              <WiRain />
            </IconContext.Provider>
            <p className='numberText1'>{rain === undefined ? 0 : rain['1h']} mm</p>
            <p className='subText1'>강수량</p>
          </div>
        ) : weatherType === 'Snow' ? (
          <div className='forecast_card_now_Bottom_item'>
            <IconContext.Provider value={{ size: '2.5em', className: 'nowBottom_icon' }}>
              <WiHumidity />
            </IconContext.Provider>
            <p className='numberText1'>{humidity} %</p>
            <p className='subText1'>습도</p>
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
        {time >= sunrise && time <= sunset ? (
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
      <IconContext.Provider
        value={{ color: '#fdfdfd', className: 'forecast_card_now_bottomcircle' }}
      >
        <FaCircle />
      </IconContext.Provider>
    </div>
  );
};

export default ForecastNowcard;
