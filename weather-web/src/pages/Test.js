import React, { Component } from 'react';

import { _getForecastNext5Info } from '../functions/getData';

export default class Test extends Component {
  state = {
    isLoaded: false,
    error: null,
    address: null,
    temp: null,
    weatherCondition: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      async position => {
        await _getForecastNext5Info(position.coords.latitude, position.coords.longitude);
        await _getForecastNext5Info(40.71, -74.01);
        this.setState({
          isLoaded: true
        });
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

  render() {
    const { isLoaded, error } = this.state;
    return (
      <div>
        {isLoaded ? (
          <p style={{ color: '#f1f1f1' }}>콘솔 로그를 확인하세요.</p>
        ) : error ? (
          <p style={{ color: '#f1f1f1' }}>위치 허용해주세요</p>
        ) : (
          <p style={{ color: '#f1f1f1' }}>로딩중..</p>
        )}
      </div>
    );
  }
}
