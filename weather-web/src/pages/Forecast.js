import React, { Component } from 'react';
import { FaBeer, FaCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { WiSnow, WiCelsius } from 'react-icons/wi';
import { TiMinus } from 'react-icons/ti';
import './Forecast.scss';

export default class Forecast extends Component {
  render() {
    return (
      <div className='timeline'>
        {/* <h3>
          {' '}
          Lets go for a <FaBeer />?{' '}
        </h3>
        <IconContext.Provider value={{ size: '5em' }}>
          <WiCelsius />
        </IconContext.Provider> */}
        <div className='card'>
          <div className='card_left'>
            <IconContext.Provider value={{ size: '3.5em' }}>
              <WiSnow />
            </IconContext.Provider>
          </div>
          <div className='card_center'>
            <h1>Right Now</h1>
            <p>Light Snow</p>
          </div>
          <div className='card_right'>
            <p>
              1
              <IconContext.Provider value={{ className: 'celsiusicon' }}>
                <WiCelsius />
              </IconContext.Provider>
            </p>
          </div>
          <IconContext.Provider value={{ color: '#fdfdfd', className: 'card_bottomcircle' }}>
            <FaCircle />
          </IconContext.Provider>
        </div>
        <div className='nonCard'>
          <IconContext.Provider value={{ color: '#fdfdfd', size: '2.5em', className: 'line' }}>
            <TiMinus />
          </IconContext.Provider>
        </div>
      </div>
    );
  }
}
