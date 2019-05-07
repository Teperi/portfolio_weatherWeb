import React, { Component } from 'react';

// Icon 불러오기
import { IconContext } from 'react-icons';
import { WiSnow, WiDaySunny } from 'react-icons/wi';
import { FaCircle } from 'react-icons/fa';

import 'pages/Forecast.scss';

export default class Forecast extends Component {
  render() {
    return (
      <div className='forecast'>
        <div className='forecast_card'>
          <div className='forecast_card_nowTop'>
            <div className='forecast_card_nowTop_left'>
              <IconContext.Provider value={{ size: '3.5em' }}>
                <WiSnow />
              </IconContext.Provider>
            </div>
            <div className='forecast_card_nowTop_center'>
              <p className='timeTitle'>지금</p>
              <p className='weatherTitle'>눈</p>
            </div>
            <div className='forecast_card_nowTop_right'>
              <p className='temperatureTitle'>1˚</p>
            </div>
          </div>
          <div className='forecast_card_nowBottom'>
            <div className='forecast_card_nowBottom_item'>
              <IconContext.Provider value={{ size: '2.5em', className: 'nowBottom_icon' }}>
                <WiSnow />
              </IconContext.Provider>
              <p className='numberText1'>수치</p>
              <p className='subText1'>설명</p>
            </div>
            <div className='forecast_card_nowBottom_item'>
              <IconContext.Provider value={{ size: '2.5em', className: 'nowBottom_icon' }}>
                <WiSnow />
              </IconContext.Provider>
              <p className='numberText2'>수치</p>
              <p className='subText2'>설명</p>
            </div>
            <div className='forecast_card_nowBottom_item'>
              <IconContext.Provider value={{ size: '2.5em', className: 'nowBottom_icon' }}>
                <WiSnow />
              </IconContext.Provider>
              <p className='numberText3'>수치</p>
              <p className='subText3'>설명</p>
            </div>
          </div>
          <IconContext.Provider
            value={{ color: '#fdfdfd', className: 'forecast_card_bottomcircle' }}
          >
            <FaCircle />
          </IconContext.Provider>
        </div>
        <div className='forecast_lineCard'>
          <div className='forecast_lineCard_line' />
          <div className='forecast_lineCard_left' />
          <div className='forecast_lineCard_right'>
            <p className='nextTimeTitle'>잠시 후</p>
            <p className='nextWeatherTitle'>맑음</p>
          </div>
        </div>
        <div className='forecast_card'>
          <IconContext.Provider value={{ color: '#fdfdfd', className: 'forecast_card_topcircle' }}>
            <FaCircle />
          </IconContext.Provider>
          <div className='forecast_card_tomorrow'>
            <div className='forecast_card_tomorrow_left'>
              <IconContext.Provider value={{ size: '3.5em' }}>
                <WiDaySunny />
              </IconContext.Provider>
            </div>
            <div className='forecast_card_tomorrow_right'>
              <p className='tomorrowTimeTitle'>내일</p>
              <p className='tomorrowWeatherTitle'>맑음</p>
            </div>
          </div>
          <IconContext.Provider
            value={{ color: '#fdfdfd', className: 'forecast_card_bottomcircle' }}
          >
            <FaCircle />
          </IconContext.Provider>
        </div>
        <div className='forecast_lineCard'>
          <div className='forecast_lineCard_line' />
          <div className='forecast_lineCard_left' />
          <div className='forecast_lineCard_right'>
            <p className='nextTimeTitle'>이번 주</p>
            <p className='nextWeatherTitle'>맑음</p>
          </div>
        </div>
        <div className='forecast_card'>
          <IconContext.Provider value={{ color: '#fdfdfd', className: 'forecast_card_topcircle' }}>
            <FaCircle />
          </IconContext.Provider>
          <div className='forecast_card_week'>test</div>
        </div>
      </div>
    );
  }
}
