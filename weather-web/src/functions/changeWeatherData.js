export const _changeWCode = id => {
  if (id >= 200 && id < 300) {
    return 'Thunderstorm';
  } else if (id >= 300 && id < 400) {
    return 'Drizzle';
  } else if (id >= 500 && id < 600) {
    return 'Rain';
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
};

export const _getMainCurrLocaInfo = async (lat, lon) => {
  const address = await _getAddr(lat, lon);
  const weatherNow = await _getWeatherNow(lat, lon);
  return {
    address: address,
    temp: Math.floor(weatherNow.main.temp),
    weatherType: _changeWCode(weatherNow.weather[0].id),
    time: getTime(),
    sunrise: weatherNow.sys.sunrise,
    sunset: weatherNow.sys.sunset
  };
};

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

const _getAddr = async (lat, lon) => {
  const address = await fetch(
    `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${lon}&y=${lat}`,
    {
      headers: {
        Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`
      }
    }
  )
    .then(response => response.json())
    .then(json => json.documents[0].address_name);
  return address;
};

const _getWeatherNow = async (lat, lon) => {
  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${
      process.env.REACT_APP_WEATHER_API_KEY
    }&units=metric`
  ).then(response => response.json());
  return weather;
};
