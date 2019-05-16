import React from 'react';

import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { MdKeyboardBackspace } from 'react-icons/md';

import './ForecastHeader.scss';

const ForecastHeader = address => {
  return (
    <div className='ForecastHeader' style={{ color: 'white' }}>
      <NavLink exact to='/'>
        <IconContext.Provider value={{ size: '2em', color: 'white' }}>
          <MdKeyboardBackspace />
        </IconContext.Provider>
      </NavLink>
      <p className='ForecastHeader_text'>{address.address}</p>
    </div>
  );
};

export default ForecastHeader;
