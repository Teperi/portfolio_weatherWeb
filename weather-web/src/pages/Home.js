import React, { Component } from 'react';

// NavLink 사용
import { NavLink } from 'react-router-dom';

// 컴포넌트 불러오기
import { MainHeader, MainPlacesCard, MainErrorCard } from '../components';

import './Home.scss';
// weather API 및 주소 API 에서 가공된 데이터 가져오기
import { _getCardLocaInfo, _getDateString } from '../functions/getData';

const getNowDate = new Date();
const coords = [
  {
    lon: 127,
    lat: 37.583328,
    address: '서울'
  },
  {
    lon: 126.416107,
    lat: 37.450001,
    address: '인천'
  },
  {
    lon: 129.050003,
    lat: 35.133331,
    address: '부산'
  },
  {
    lon: 128.550003,
    lat: 35.799999,
    address: '대구'
  },
  {
    lon: 127.416672,
    lat: 36.333328,
    address: '대전'
  },
  {
    lon: 126.916672,
    lat: 35.166672,
    address: '광주'
  },
  {
    lon: 129.266663,
    lat: 35.566669,
    address: '울산'
  },
  {
    lon: 126.521942,
    lat: 33.50972,
    address: '제주'
  }
];
const cardlist = arr => {
  const listItems = arr.map(obj => {
    return (
      <NavLink key={`${obj.lat}_${obj.lon}`} to={`forecast/${obj.lat}/${obj.lon}`} className='item'>
        <MainPlacesCard
          key={`${obj.lat}_${obj.lon}`}
          locationTitle={obj.address}
          locationSub={obj.subaddress}
          weatherType={obj.type}
          temperature={obj.temp}
          sunrise={obj.sunrise}
          sunset={obj.sunset}
        />
      </NavLink>
    );
  });
  return <div className='cardList'>{listItems}</div>;
};

export default class Home extends Component {
  state = {
    isLoaded: false,
    time: _getDateString(getNowDate),
    error: null,
    card: [],
    cardCount: 9
  };

  componentDidMount() {
    // 현재 위치(좌표) 확인해서 API 에서 가공된 데이터 가져오기
    navigator.geolocation.getCurrentPosition(
      async position => {
        for (let index = 0; index < 9; index++) {
          let obj = null;
          if (index === 0) {
            obj = await _getCardLocaInfo(position.coords.latitude, position.coords.longitude);
            this.setState({
              card: [
                {
                  lat: position.coords.latitude,
                  lon: position.coords.longitude,
                  address: obj.address,
                  subaddress: '현재 위치',
                  temp: obj.temp,
                  type: obj.weatherType,
                  sunrise: obj.sunrise,
                  sunset: obj.sunset
                }
              ]
            });
          } else if (index === 8) {
            obj = await _getCardLocaInfo(coords[index - 1].lat, coords[index - 1].lon);
            this.setState({
              card: [
                ...this.state.card,
                {
                  lat: coords[index - 1].lat,
                  lon: coords[index - 1].lon,
                  address: coords[index - 1].address,
                  subaddress: '대한민국',
                  temp: obj.temp,
                  type: obj.weatherType,
                  sunrise: obj.sunrise,
                  sunset: obj.sunset
                }
              ],
              isLoaded: true
            });
          } else {
            obj = await _getCardLocaInfo(coords[index - 1].lat, coords[index - 1].lon);
            this.setState({
              card: [
                ...this.state.card,
                {
                  lat: coords[index - 1].lat,
                  lon: coords[index - 1].lon,
                  address: coords[index - 1].address,
                  subaddress: '대한민국',
                  temp: obj.temp,
                  type: obj.weatherType,
                  sunrise: obj.sunrise,
                  sunset: obj.sunset
                }
              ]
            });
          }
        }
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
            {cardlist(state.card)}
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
            <p style={{ textAlign: 'center', color: 'white', margin: 'auto' }}>로딩중...</p>
          </div>
        )}
      </div>
    );
  }
}
