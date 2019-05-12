function changeWCCode(id) {
  if (id >= 200 && id < 300) {
    return 'Thunderstorm';
    // WiThunderstorm
    // 색 1: #8D23A9
  } else if (id >= 300 && id < 400) {
    return 'Drizzle';
    // WiSleet
    // #7da9ff
  } else if (id >= 500 && id < 600) {
    return 'Rain';
    // WiRaindrops
    // 색 1: #457AD1
  } else if (id >= 600 && id < 700) {
    return 'Snow';
    // WiSnow
    // #FAFAFC
  } else if (id >= 700 && id < 800) {
    return 'Atmosphere';
    // 낮이면 WiDayHaze
    // 밤이면 WiNightFog
    // #b9c2d0
  } else if (id === 800) {
    return 'Clear';
    // 낮이면 WiDaySunny
    // 밤이면 WiNightClear
    // #F8BC25
    // #575D80
  } else if (id > 800 && id < 900) {
    return 'Clouds';
    // WiCloud
    // #89929F
  } else {
    throw new Error('날씨 코드가 이상해!');
  }
}

export default changeWCCode;
