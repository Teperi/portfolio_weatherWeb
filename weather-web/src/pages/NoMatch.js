import React from 'react';
import MixedDataExample from '../components/ForecastChart';

const NoMatch = () => {
  return (
    <div style={{ color: 'white', margin: 'auto' }}>
      <p style={{ textAlign: 'center' }}>페이지를 찾을 수 없습니다.</p>
      <MixedDataExample />
    </div>
  );
};

export default NoMatch;
