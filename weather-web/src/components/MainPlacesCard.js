import React, { Component } from 'react';

import { IconContext } from 'react-icons';
import {
  WiCelsius,
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

import './MainPlacesCard.scss';

function WeatherTypes(props) {
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
}

// TODO: constructor 사용시 문제점 확인
export default class MainPlacesCard extends Component {
  constructor(props) {
    super(props);
    const type = props.weatherType;
    const timeInMs = Date.now();
    if (type === 'Thunderstorm') {
      this.state = {
        bgColor: '#8D23A9',
        textColor: '#111'
      };
    } else if (type === 'Drizzle') {
      this.state = {
        bgColor: '#7da9ff',
        textColor: '#111'
      };
    } else if (type === 'Rain') {
      this.state = {
        bgColor: '#457AD1',
        textColor: '#f1f1f1'
      };
    } else if (type === 'Snow') {
      this.state = {
        bgColor: '#FAFAFC',
        textColor: '#111'
      };
    } else if (type === 'Atmosphere') {
      this.state = {
        bgColor: '#b9c2d0',
        textColor: '#111'
      };
    } else if (type === 'Clear') {
      if (timeInMs >= props.sunrise && timeInMs <= props.sunset) {
        this.state = {
          bgColor: '#f8bc25',
          textColor: '#111'
        };
      } else {
        this.state = {
          bgColor: '#575d80',
          textColor: '#f1f1f1'
        };
      }
    } else if (type === 'Clouds') {
      this.state = {
        bgColor: '#89929f',
        textColor: '#111'
      };
    } else {
      console.log('색 변경 에러인데요??');
      this.state = {
        bgColor: '#EE5E5E',
        textColor: '#111'
      };
    }
  }

  render() {
    const bgColor = {
      background: this.state.bgColor,
      color: this.state.textColor
    };
    console.log(bgColor);
    return (
      <div className='place_card' style={bgColor}>
        <div className='place_card_left'>
          <IconContext.Provider value={{ size: '3.5em' }}>
            <WeatherTypes
              type={this.props.weatherType}
              sunrise={this.props.sunrise}
              sunset={this.props.sunset}
            />
          </IconContext.Provider>
          <p className='location_title'>{this.props.locationTitle}</p>
          <p className='location_sub'>{this.props.locationSub}</p>
        </div>
        <div className='place_card_right'>
          <p className='temperature'>
            {this.props.temperature}
            <WiCelsius />
          </p>
          <p className='time'>{this.props.time}</p>
        </div>
      </div>
    );
  }
}
