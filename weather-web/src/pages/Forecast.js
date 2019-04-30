import React, { Component } from 'react';
import { FaBeer } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { WiCelsius } from 'react-icons/wi';
import './Forecast.scss';

export default class Forecast extends Component {
  render() {
    return (
      <div>
        여기에 상세 내용을 담을 예정입니다.
        <h3>
          {' '}
          Lets go for a <FaBeer />?{' '}
        </h3>
        <IconContext.Provider value={{ size: '5em' }}>
          <WiCelsius />
        </IconContext.Provider>
        // Card test
        <div className='card'>
          <div className='card_left'>
            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png' />
          </div>
          <div className='card_right'>
            <h1>KILL BILL: VOL. 1</h1>
            <div className='card_right__details'>
              <ul>
                <li>2003</li>
                <li>111 min</li>
                <li>Action</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
