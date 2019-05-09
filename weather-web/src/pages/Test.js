import React, { Component } from 'react';

const API_KEY = '59c393b03e080c261debf8f17784f0c4';

export default class Test extends Component {
  state = {
    isLoaded: false,
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeatherJson(position.coords.latitude, position.coords.longitude);
        this._coordsToAddr(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

  _coordsToAddr = (lat,lon) => {
    fetch(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${lon}&y=${lat}`, {
      headers: {
        "Authorization": "KakaoAK 87fbfced5e60485e49838e6f25b99861"
      }
    })
    .then(response => response.json())
    .then(json => {console.log(json);})
  }

  _getWeatherJson = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
      .then(response => response.json())
      .then(json => {console.log(json);
      this.setState({
        isLoaded:true
      })});
  };

  render() {
    const { isLoaded, error } = this.state;
    return (
      <div>
        {isLoaded ? (<p style={{ color: '#f1f1f1' }}>콘솔 로그를 확인하세요.</p>) : (<p style={{ color: '#f1f1f1' }}>로딩중..</p>)}
        
      </div>
    );
  }
}
