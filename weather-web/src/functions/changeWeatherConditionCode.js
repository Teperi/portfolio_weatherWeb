function changeWCCode(id) {
  if (id >= 200 && id < 300) {
    return 'Thunderstorm';
    // WiThunderstorm
  } else if (id >= 300 && id < 400) {
    return 'Drizzle';
    // WiSleet
  } else if (id >= 500 && id < 600) {
    return 'Rain';
    // WiRaindrops
  } else if (id >= 600 && id < 700) {
    return 'Snow';
  } else if (id >= 700 && id < 800) {
    return 'Atmosphere';
  } else if (id === 800) {
    return 'Clear';
  } else if (id > 800 && id < 900) {
    return 'Clouds';
  } else {
    throw new Error('날씨 코드가 이상해!');
  }
}

export default changeWCCode;
