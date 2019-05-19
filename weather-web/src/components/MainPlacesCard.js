import React, { Component } from 'react';

import { IconContext } from 'react-icons';
import { WiCelsius } from 'react-icons/wi';

import {
  WeatherTypeIconWithHours,
  WeatherTypeColorWithHours
} from '../functions/changeWeatherData';

import './MainPlacesCard.scss';

// TODO: constructor 사용시 문제점 확인
export default class MainPlacesCard extends Component {
  constructor(props) {
    super(props);
    this.state = WeatherTypeColorWithHours(props.weatherType, props.sunrise, props.sunset);
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
          <IconContext.Provider value={{ size: '4em' }}>
            <WeatherTypeIconWithHours
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
        </div>
      </div>
    );
  }
}
