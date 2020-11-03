import axios, { AxiosResponse } from 'axios';

const googleKey = process.env.REACT_APP_GOOGLE_KEY;
const openWeatherKey = process.env.REACT_APP_OPEN_WEATHER;

interface IGoogleData {
  error_message?: string,
  results: google.maps.GeocoderResult[]
}

interface IGoogle extends AxiosResponse {
  data: IGoogleData
}

interface ICurrentWeather extends AxiosResponse {
  data: IWeather.Current
}

interface IForecastData {
  daily: IWeather.Daily[]
}

interface IForecastWeather extends AxiosResponse {
  data: IForecastData
}

export const google = {
  getLocationDetails: (lat: string | number, lng: string | number): Promise<IGoogle> => (
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleKey}`)
  )
}

export const openWeather = {
  getCurrentWeather: (lat: string | number, lon: string | number): Promise<ICurrentWeather> => (
    axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        lat,
        lon,
        units: 'metric',
        appid: openWeatherKey
      },
    })
  ),
  getForecastWeather: (lat: string | number, lon: string | number): Promise<IForecastWeather> => (
    axios.get(`https://api.openweathermap.org/data/2.5/onecall`, {
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