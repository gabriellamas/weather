import { get } from 'axios';

const googleKey = process.env.REACT_APP_GOOGLE_KEY;
const openWeatherKey = process.env.REACT_APP_OPEN_WEATHER;

export const google = {
  getLocationDetails: (lat, lng) => (
    get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleKey}`)
  )
}

export const openWeather = {
  getCurrentWeather: (lat, lon) => (
    get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        lat,
        lon,
        units: 'metric',
        appid: openWeatherKey
      },
    })
  ),
  getForecastWeather: (lat, lon) => (
    get(`https://api.openweathermap.org/data/2.5/onecall`, {
      params: {
        lat,
        lon,
        units: 'metric',
        appid: openWeatherKey,
        exclude: 'current,minutely,hourly,alerts'
      },
    })
  )
}