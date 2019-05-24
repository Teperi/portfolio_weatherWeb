import React from 'react';

import { IconContext } from 'react-icons';
import { MdLocationOn } from 'react-icons/md';

import './MainHeader.scss';

const MainHeader = ({ nowTime }) => {
  return (
    <div className='MainHeader' style={{ color: 'white' }}>
      <a href='/' style={{ textDecoration: 'none' }}>
        <IconContext.Provider value={{ size: '2em', color: 'white' }}>
          <MdLocationOn />
        </IconContext.Provider>
      </a>
      <p className='MainHeader_text'>위치</p>
      <p className='MainHeader_time'>{nowTime}</p>
    </div>
  );
};

export default MainHeader;
