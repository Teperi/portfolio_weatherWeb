import React, { Component } from 'react';

// Icon 불러오기
import { IconContext } from 'react-icons';
import { WiSnow, WiCelsius } from 'react-icons/wi';
import { FaPlusSquare } from 'react-icons/fa';

import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className='list'>
        <div className='list_card'>
          <div className='list_card_left'>
            <IconContext.Provider value={{ size: '3.5em' }}>
              <WiSnow />
            </IconContext.Provider>
            <p className='location_title'>York</p>
            <p className='location_sub'>Current Location</p>
          </div>
          <div className='list_card_right'>
            <p className='temperature'>
              4<WiCelsius />
            </p>
            <p className='time'>16:11</p>
          </div>
        </div>

        <div className='list_card'>
          <div className='list_card_left'>
            <IconContext.Provider value={{ size: '3.5em' }}>
              <WiSnow />
            </IconContext.Provider>
            <p className='location_title'>York</p>
            <p className='location_sub'>Current Location</p>
          </div>
          <div className='list_card_right'>
            <p className='temperature'>
              4<WiCelsius />
            </p>
            <p className='time'>16:11</p>
          </div>
        </div>
        <div className='list_card'>
          <div className='list_card_left'>
            <IconContext.Provider value={{ size: '3.5em' }}>
              <WiSnow />
            </IconContext.Provider>
            <p className='location_title'>York</p>
            <p className='location_sub'>Current Location</p>
          </div>
          <div className='list_card_right'>
            <p className='temperature'>
              4<WiCelsius />
            </p>
            <p className='time'>16:11</p>
          </div>
        </div>
        <div className='list_card'>
          <div className='list_card_left'>
            <IconContext.Provider value={{ size: '3.5em' }}>
              <WiSnow />
            </IconContext.Provider>
            <p className='location_title'>York</p>
            <p className='location_sub'>Current Location</p>
          </div>
          <div className='list_card_right'>
            <p className='temperature'>
              4<WiCelsius />
            </p>
            <p className='time'>16:11</p>
          </div>
        </div>
        <div className='list_card_add'>
          <IconContext.Provider value={{ size: '3em', color: 'white' }}>
            <FaPlusSquare />
          </IconContext.Provider>
        </div>
      </div>
    );
  }
}
