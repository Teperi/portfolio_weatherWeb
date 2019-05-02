import React, { Component } from 'react';
import { FaCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { WiSnow } from 'react-icons/wi';
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
        <div className='card_main'>
          <div className='card_main_top'>
            <div className='card_main_top_left'>
              <IconContext.Provider value={{ size: '3.5em' }}>
                <WiSnow />
              </IconContext.Provider>
            </div>
            <div className='card_main_top_center'>
              <h1>Right Now</h1>
              <p>Light Snow</p>
            </div>
            <div className='card_main_top_right'>
              <p>1˚</p>
            </div>
          </div>
          <div className='card_main_bottom'>
            <div className='card_main_bottom_left'>
              <IconContext.Provider value={{ size: '2.5em' }}>
                <WiSnow />
              </IconContext.Provider>
              <p>
                <h4>17km/h</h4>
                test
              </p>
            </div>
            <div className='card_main_bottom_center'>
              <IconContext.Provider value={{ size: '2.5em' }}>
                <WiSnow />
              </IconContext.Provider>
              <p>
                <h4>17km/h</h4>
                test
              </p>
            </div>
            <div className='card_main_bottom_right'>
              <IconContext.Provider value={{ size: '2.5em' }}>
                <WiSnow />
              </IconContext.Provider>
              <p>
                <h4>17km/h</h4>
                test
              </p>
            </div>
          </div>
          <IconContext.Provider value={{ color: '#fdfdfd', className: 'card_bottomcircle' }}>
            <FaCircle />
          </IconContext.Provider>
        </div>
        <div className='nonCard'>
          <div className='nonCard_left'>
            <IconContext.Provider value={{ color: '#fdfdfd', size: '2.5em', className: 'line_1' }}>
              <TiMinus />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: '#fdfdfd', size: '2.5em', className: 'line_2' }}>
              <TiMinus />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: '#fdfdfd', size: '2.5em', className: 'line_3' }}>
              <TiMinus />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: '#fdfdfd', size: '2.5em', className: 'line_4' }}>
              <TiMinus />
            </IconContext.Provider>
          </div>
          <div className='nonCard_right'>
            <p>
              <h4>Next Hour</h4>
              맑음
            </p>
          </div>
        </div>
        <div className='card_sub'>
          <IconContext.Provider value={{ color: '#fdfdfd', className: 'card_topcircle' }}>
            <FaCircle />
          </IconContext.Provider>
          <div className='card_sub_left'>
            <IconContext.Provider value={{ color: '#fdfdfd', size: '3em' }}>
              <WiSnow />
            </IconContext.Provider>
          </div>
          <div className='card_sub_right'>
            <p>test</p>
          </div>
          <IconContext.Provider value={{ color: '#fdfdfd', className: 'card_bottomcircle' }}>
            <FaCircle />
          </IconContext.Provider>
        </div>
        <div className='nonCard'>
          <div className='nonCard_left'>
            <IconContext.Provider value={{ color: '#fdfdfd', size: '2.5em', className: 'line_1' }}>
              <TiMinus />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: '#fdfdfd', size: '2.5em', className: 'line_2' }}>
              <TiMinus />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: '#fdfdfd', size: '2.5em', className: 'line_3' }}>
              <TiMinus />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: '#fdfdfd', size: '2.5em', className: 'line_4' }}>
              <TiMinus />
            </IconContext.Provider>
          </div>
          <div className='nonCard_right'>
            <p>
              <h4>Next Hour</h4>
              맑음
            </p>
          </div>
        </div>
        <div className='card_sub'>
          <IconContext.Provider value={{ color: '#fdfdfd', className: 'card_topcircle' }}>
            <FaCircle />
          </IconContext.Provider>
          <div className='card_sub_forecast'>
            <div className='card_sub_forecast_1'>
              <div className='card_sub_forecast_1_left'>
                <IconContext.Provider value={{ color: '#fdfdfd', size: '3em' }}>
                  <WiSnow />
                </IconContext.Provider>
              </div>
              <div className='card_sub_forecast_1_right'>
                <p>
                  <h4>Next Hour</h4>
                  맑음
                </p>
              </div>
            </div>
            <div className='card_sub_forecast_2'>
              <div className='card_sub_forecast_2_left'>
                <IconContext.Provider value={{ color: '#fdfdfd', size: '3em' }}>
                  <WiSnow />
                </IconContext.Provider>
              </div>
              <div className='card_sub_forecast_2_right'>
                <p>
                  <h4>Next Hour</h4>
                  맑음
                </p>
              </div>
            </div>
            <div className='card_sub_forecast_3'>
              <div className='card_sub_forecast_3_left'>
                <IconContext.Provider value={{ color: '#fdfdfd', size: '3em' }}>
                  <WiSnow />
                </IconContext.Provider>
              </div>
              <div className='card_sub_forecast_3_right'>
                <p>
                  <h4>Next Hour</h4>
                  맑음
                </p>
              </div>
            </div>
            <div className='card_sub_forecast_4'>
              <div className='card_sub_forecast_4_left'>
                <IconContext.Provider value={{ color: '#fdfdfd', size: '3em' }}>
                  <WiSnow />
                </IconContext.Provider>
              </div>
              <div className='card_sub_forecast_4_right'>
                <p>
                  <h4>Next Hour</h4>
                  맑음
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
