import React, { Component } from 'react';

import { IconContext } from 'react-icons';
import { FaExclamationTriangle } from 'react-icons/fa';

import './MainPlacesCard.scss';

export default class MainErrorCard extends Component {
  render() {
    return (
      <div className='place_card' style={{ background: '#EE5E5E' }}>
        <div className='place_card_errorIcon'>
          <IconContext.Provider value={{ size: '3.5em', color: '#f1f1f1' }}>
            <FaExclamationTriangle />
          </IconContext.Provider>
        </div>
        <div className='place_card_errorText'>
          <p className='error_title'>현재 위치를 확인할 수 없습니다.</p>
          <p className='error_sub'>위치 정보를 허용해주세요.</p>
        </div>
      </div>
    );
  }
}
