import React, { Component } from 'react';

// NavLink 사용
import { NavLink } from 'react-router-dom';

// Icon 불러오기
import { IconContext } from 'react-icons';
import { FaPlusSquare } from 'react-icons/fa';

//card 디자인 불러오기
import MainPlacesCard from '../components/MainPlacesCard';
import MainErrorCard from '../components/MainErrorCard';
import MainHeader from '../components/MainHeader';

import './Home.scss';
// weather API 및 주소 API 에서 가공된 데이터 가져오기
import { _getMainCurrLocaInfo } from '../functions/getData';

export default class Home extends Component {
  state = {
    isLoaded: false,
    cardCount: 1,
    error: null,
    card1: null
  };

  componentDidMount() {
    // 현재 위치(좌표) 확인해서 API 에서 가공된 데이터 가져오기
    navigator.geolocation.getCurrentPosition(
      async position => {
        const obj = await _getMainCurrLocaInfo(position.coords.latitude, position.coords.longitude);
        console.log(obj);
        this.setState({
          card1: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            address: obj.address,
            temp: obj.temp,
            type: obj.weatherType,
            time: obj.time,
            sunrise: obj.sunrise,
            sunset: obj.sunset
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
      <div className='list'>
        <MainHeader />
        {state.isLoaded ? (
          <NavLink to={`forecast/${state.card1.lat}/${state.card1.lon}`} className='item'>
            <MainPlacesCard
              locationTitle={state.card1.address}
              locationSub='현재 위치'
              weatherType={state.card1.type}
              temperature={state.card1.temp}
              sunrise={state.card1.sunrise}
              sunset={state.card1.sunset}
              time={state.card1.time}
            />
          </NavLink>
        ) : state.error ? (
          <MainErrorCard />
        ) : (
          <p style={{ color: '#f1f1f1' }}>로딩중..</p>
        )}

        <div className='list_card_add'>
          <IconContext.Provider value={{ size: '3em', color: 'white' }}>
            <FaPlusSquare />
          </IconContext.Provider>
        </div>
      </div>
    );
  }
}
