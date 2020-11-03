declare namespace IWeather {
  interface ICurrentWeatherData {
    temp: number
  }
  interface Current {
    main: ICurrentWeatherData
  }
  interface ITempData {
    min: number,
    max: number
  }
  interface Daily {
    dt: number,
    temp: ITempData
  }
}