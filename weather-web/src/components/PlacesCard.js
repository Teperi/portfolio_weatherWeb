import React, { Component } from 'react';

import { IconContext } from 'react-icons';
import { WiDaySunny, WiSnow, WiCelsius } from 'react-icons/wi';

import './PlacesCard.scss';

function WeatherTypes(props) {
  const type = props.type;
  if (type === '맑음') {
    return <WiDaySunny />;
  } else {
    return <WiSnow />;
  }
}
// TODO: constructor 사용시 문제점 확인
export default class PlaceCard extends Component {
  constructor(props) {
    super(props);
    if (props.weatherType === '맑음') {
      this.state = {
        bgColor: 'orange',
        textColor: '#f1f1f1'
      };
    } else {
      this.state = {
        bgColor: '#bbb',
        textColor: '#222'
      };
    }
  }
  render() {
    const bgColor = {
      background: this.state.bgColor,
      color: this.state.textColor
    };
    return (
      <div className='place_card' style={bgColor}>
        <div className='place_card_left'>
          <IconContext.Provider value={{ size: '3.5em' }}>
            <WeatherTypes type={this.props.weatherType} />
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
