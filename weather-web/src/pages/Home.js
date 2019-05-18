import React, { Component } from 'react';

// NavLink 사용
import { NavLink } from 'react-router-dom';

// 컴포넌트 불러오기
import { MainHeader, MainPlacesCard, MainErrorCard } from '../components';

import './Home.scss';
// weather API 및 주소 API 에서 가공된 데이터 가져오기
import { _getCardLocaInfo, _getNowTime } from '../functions/getData';

export default class Home extends Component {
  state = {
    isLoaded: false,
    time: _getNowTime(),
    error: null,
    card1: null,
    card2: null,
    card3: null
  };

  componentDidMount() {
    // 현재 위치(좌표) 확인해서 API 에서 가공된 데이터 가져오기
    navigator.geolocation.getCurrentPosition(
      async position => {
        const obj1 = await _getCardLocaInfo(position.coords.latitude, position.coords.longitude);
        const obj2 = await _getCardLocaInfo(40.71, -74.01);
        const obj3 = await _getCardLocaInfo(48.85, 2.35);
        this.setState({
          card1: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            address: obj1.address,
            temp: obj1.temp,
            type: obj1.weatherType,
            sunrise: obj1.sunrise,
            sunset: obj1.sunset
          },
          card2: {
            lat: 40.71,
            lon: -74.01,
            address: obj2.address,
            temp: obj2.temp,
            type: obj2.weatherType,
            sunrise: obj2.sunrise,
            sunset: obj2.sunset
          },
          card3: {
            lat: 48.85,
            lon: 2.35,
            address: obj3.address,
            temp: obj3.temp,
            type: obj3.weatherType,
            sunrise: obj3.sunrise,
            sunset: obj3.sunset
          },
          isLoaded: true
        });
        console.log(this.state);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

  render() {
    const state = this.state;
    return (
      <div>
        {state.isLoaded ? (
          <div className='list'>
            <MainHeader nowTime={state.time} />
            <NavLink to={`forecast/${state.card1.lat}/${state.card1.lon}`} className='item'>
              <MainPlacesCard
                locationTitle={state.card1.address}
                locationSub='현재 위치'
                weatherType={state.card1.type}
                temperature={state.card1.temp}
                sunrise={state.card1.sunrise}
                sunset={state.card1.sunset}
              />
            </NavLink>
            <NavLink to={`forecast/40.71/-74.01`} className='item'>
              <MainPlacesCard
                locationTitle={state.card2.address}
                locationSub='USA'
                weatherType={state.card2.type}
                temperature={state.card2.temp}
                sunrise={state.card2.sunrise}
                sunset={state.card2.sunset}
              />
            </NavLink>
            <NavLink to={`forecast/48.85/2.35`} className='item'>
              <MainPlacesCard
                locationTitle={state.card3.address}
                locationSub='France'
                weatherType={state.card3.type}
                temperature={state.card3.temp}
                sunrise={state.card3.sunrise}
                sunset={state.card3.sunset}
              />
            </NavLink>
            {/* 카드 추가 기능 - 구현 시 사용
        <div className='list_card_add'>
        <IconContext.Provider value={{ size: '3em', color: 'white' }}>
            <FaPlusSquare />
            </IconContext.Provider>
        </div> 
      */}
          </div>
        ) : state.error ? (
          <div className='list'>
            <MainHeader nowTime={state.time} />
            <MainErrorCard />
          </div>
        ) : (
          <div className='list'>
            <MainHeader nowTime={state.time} />
            <p style={{ color: '#f1f1f1' }}>로딩중..</p>
          </div>
        )}
      </div>
    );
  }
}
