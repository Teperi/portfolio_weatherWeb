import React, { Component } from 'react';

// NavLink 사용
import { NavLink } from 'react-router-dom';

// Icon 불러오기
import { IconContext } from 'react-icons';
import { FaPlusSquare } from 'react-icons/fa';

//card 디자인 불러오기
import PlacesCard from '../components/PlacesCard';
import MainHeader from '../components/MainHeader';

import './Home.scss';

import changeWCCode from '../functions/changeWeatherConditionCode';
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;

export default class Home extends Component {
  state = {
    isLoaded: false,
    cardCount: 1,
    error: null,
    card1: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getInfoJson(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

  _getInfoJson = (lat, lon) => {
    // 주소 정보 가져오기
    fetch(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${lon}&y=${lat}`, {
      headers: {
        Authorization: `KakaoAK ${KAKAO_API_KEY}`
      }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          card1: {
            address: json.documents[0].address_name
          }
        });
      })
      .then(this._getWeatherJson(lat, lon));
    // 주소 정보 다 가져온 이후 날씨 정보 가져오기
  };

  _getWeatherJson = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${WEATHER_API_KEY}&units=metric`
    )
      .then(response => response.json())
      .then(json => {
        console.log('api 확인용', json);
        this.setState({
          card1: {
            address: this.state.card1.address,
            temp: json.main.temp,
            weatherCondition: changeWCCode(json.weather[0].id)
          },
          isLoaded: true
        });
        console.log(this.state);
      });
  };

  render() {
    const state = this.state;
    return (
      <div className='list'>
        <MainHeader />
        {state.isLoaded ? (
          <NavLink to='/forecast/61/126' className='item'>
            <PlacesCard
              locationTitle={state.card1.address}
              locationSub='현재 위치'
              weatherType='눈'
              temperature={state.card1.temp}
              time='14:41'
            />
          </NavLink>
        ) : (
          <p style={{ color: '#f1f1f1' }}>로딩중..</p>
        )}
        <NavLink to='/forecast/61/126' className='item'>
          <PlacesCard
            locationTitle='서울'
            locationSub='대한민국'
            weatherType='맑음'
            temperature='15'
            time='14:41'
          />
        </NavLink>
        <NavLink to='/forecast/61/126' className='item'>
          <PlacesCard
            locationTitle='서울'
            locationSub='대한민국'
            weatherType='맑음'
            temperature='15'
            time='14:41'
          />
        </NavLink>
        <NavLink to='/forecast/61/126' className='item'>
          <PlacesCard
            locationTitle='서울'
            locationSub='대한민국'
            weatherType='맑음'
            temperature='15'
            time='14:41'
          />
        </NavLink>
        <NavLink to='/forecast/61/126' className='item'>
          <PlacesCard
            locationTitle='서울'
            locationSub='대한민국'
            weatherType='맑음'
            temperature='15'
            time='14:41'
          />
        </NavLink>

        <div className='list_card_add'>
          <IconContext.Provider value={{ size: '3em', color: 'white' }}>
            <FaPlusSquare />
          </IconContext.Provider>
        </div>
      </div>
    );
  }
}
