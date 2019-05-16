import React from 'react';

import {
  WiThunderstorm,
  WiSleet,
  WiRaindrops,
  WiSnow,
  WiDayHaze,
  WiNightFog,
  WiDaySunny,
  WiNightClear,
  WiCloud
} from 'react-icons/wi';
import { FaExclamationTriangle } from 'react-icons/fa';

// 날씨에 맞는 아이콘 내보내기
export const WeatherTypeIcon = props => {
  const type = props.type;
  const timeInMs = Date.now();
  if (type === 'Thunderstorm') {
    return <WiThunderstorm />;
  } else if (type === 'Drizzle') {
    return <WiSleet />;
  } else if (type === 'Rain') {
    return <WiRaindrops />;
  } else if (type === 'Snow') {
    return <WiSnow />;
  } else if (type === 'Atmosphere') {
    if (timeInMs >= props.sunrise && timeInMs <= props.sunset) {
      return <WiDayHaze />;
    } else {
      return <WiNightFog />;
    }
  } else if (type === 'Clear') {
    if (timeInMs >= props.sunrise && timeInMs <= props.sunset) {
      return <WiDaySunny />;
    } else {
      return <WiNightClear />;
    }
  } else if (type === 'Clouds') {
    return <WiCloud />;
  } else {
    console.log('아이콘 에러인데요??');
    return <FaExclamationTriangle />;
  }
};

// 날씨에 맞는 카드 및 글씨 색 내보내기
export const WeatherTypeColor = (type, sunrise, sunset) => {
  const timeInMs = Date.now();
  if (type === 'Thunderstorm') {
    return {
      bgColor: '#8D23A9',
      textColor: '#f1f1f1'
    };
  } else if (type === 'Drizzle') {
    return {
      bgColor: '#7da9ff',
      textColor: '#f1f1f1'
    };
  } else if (type === 'Rain') {
    return {
      bgColor: '#457AD1',
      textColor: '#f1f1f1'
    };
  } else if (type === 'Snow') {
    return {
      bgColor: '#FAFAFC',
      textColor: '#333'
    };
  } else if (type === 'Atmosphere') {
    return {
      bgColor: '#b9c2d0',
      textColor: '#333'
    };
  } else if (type === 'Clear') {
    if (timeInMs >= sunrise && timeInMs <= sunset) {
      return {
        bgColor: '#f8bc25',
        textColor: '#f1f1f1'
      };
    } else {
      return {
        bgColor: '#575d80',
        textColor: '#f1f1f1'
      };
    }
  } else if (type === 'Clouds') {
    return {
      bgColor: '#89929f',
      textColor: '#333'
    };
  } else {
    console.log('색 변경 에러인데요??');
    return {
      bgColor: '#EE5E5E',
      textColor: '#f1f1f1'
    };
  }
};

// 날씨 텍스트 한글 변경
export const WeatherTypeText = type => {
  if (type === 'Thunderstorm') {
    return '뇌우';
  } else if (type === 'Drizzle') {
    return '이슬비';
  } else if (type === 'Rain') {
    return '비';
  } else if (type === 'Snow') {
    return '눈';
  } else if (type === 'Atmosphere') {
    return '안개';
  } else if (type === 'Clear') {
    return '맑음';
  } else if (type === 'Clouds') {
    return '흐림';
  } else {
    console.log('날씨 텍스트 에러인데요??');
    return '알수 없음';
  }
};

// 바람 방향 숫자 -> 한글 변경
// N 348.75 - 11.25
// NNE 11.25 - 33.75
// NE 33.75 - 56.25
// ENE 56.25 - 78.75
// E 78.75 - 101.25
// ESE 101.25 - 123.75
// SE 123.75 - 146.25
// SSE 146.25 - 168.75
// S 168.75 - 191.25
// SSW 191.25 - 213.75
// SW 213.75 - 236.25
// WSW 236.25 - 258.75
// W 258.75 - 281.25
// WNW 281.25 - 303.75
// NW 303.75 - 326.25
// NNW 326.25 - 348.75
export const WindDegreeToText = degree => {
  if (degree >= 11.25 && degree < 33.75) {
    return '북북동';
  } else if (degree >= 33.75 && degree < 56.25) {
    return '북동';
  } else if (degree >= 56.25 && degree < 78.75) {
    return '동북동';
  } else if (degree >= 78.75 && degree < 101.25) {
    return '동';
  } else if (degree >= 101.25 && degree < 123.75) {
    return '동남동';
  } else if (degree >= 123.75 && degree < 146.25) {
    return '남동';
  } else if (degree >= 146.25 && degree < 168.75) {
    return '남남동';
  } else if (degree >= 168.75 && degree < 191.25) {
    return '남';
  } else if (degree >= 191.25 && degree < 213.75) {
    return '남남서';
  } else if (degree >= 213.75 && degree < 236.25) {
    return '남서';
  } else if (degree >= 236.25 && degree < 258.75) {
    return '서남서';
  } else if (degree >= 258.75 && degree < 281.25) {
    return '서';
  } else if (degree >= 281.25 && degree < 303.75) {
    return '서북서';
  } else if (degree >= 303.75 && degree < 326.25) {
    return '북서';
  } else if (degree >= 326.25 && degree < 348.75) {
    return '북북서';
  } else if ((degree >= 348.75 && degree < 361) || (degree >= 0 && degree < 11.25)) {
    return '북';
  } else {
    console.log('바람 값이 이상한데요?');
    return '-';
  }
};

// sunrise 및 sunset 시간 변경
export const millisecondsToTime = ms => {
  const date = new Date(ms);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
};
