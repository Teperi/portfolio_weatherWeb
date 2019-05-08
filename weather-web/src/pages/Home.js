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

export default class Home extends Component {
  render() {
    return (
      <div className='list'>
        <MainHeader />
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
