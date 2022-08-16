import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentLocationWeather } from "@api/rest/fetch-country";
import getDateInfo from "../../utils/getDateInfo";

export const getCurrentStateWeather = createAsyncThunk(
  'currentWeather/getCurrentStateWeather',
  async ({lat, lon}) => {
    const data = await getCurrentLocationWeather(lat, lon)
    return data
  }
)

const fillField = (action) => {
  const payload = action.payload
  return {
    sky: payload.weather?.main ?? 'Clear',
    temp: payload.main?.temp ?? 'no info',
    humidity: payload.main?.humidity ?? 'no info',
    wind: payload.wind?.speed ?? 'no info',
    date: getDateInfo(payload.dt * 1000) ?? 'no info',
    name: payload.name,
    clouds: payload.clouds?.all ?? 0,
    country: payload.sys?.country ?? 'no info',
    sunrise: payload.sys?.sunrise ?? 1660609977,
    sunset: payload.sys?.sunset ?? 1660659726,
    weather: payload.weather?.at(0)?.description,
  }
}

const checkDay = (sunset, sunrise, date) => {
  const nightHours = new Date(sunset * 1000).getHours()
  const nightMinutes = new Date(sunset * 1000).getMinutes()
  const dayHours = new Date(sunrise * 1000).getHours()
  const dayMinutes = new Date(sunrise * 1000).getMinutes()

  if(`${date.hours}:${date.minutes}` > `${dayHours}:${dayMinutes}` && `${date.hours}:${date.minutes}` > `${nightHours}:${nightMinutes}`) {
    return 'night'
  } else if(`${date.hours}` >= 0 && `${date.hours}:${date.minutes}` < `${dayHours}:${dayMinutes}`) {
    return 'night'
  } else {
    return 'day'
  }
}

const name = 'currentWeather'

const initialState = {
  status: null,
  error: null,
  currentWeather: {
    sky: 'Clear',
    temp: 0,
    humidity: 0,
    wind: 0,
    date: new Date().toISOString(),
    name: '',
    country: '',
    sunset: 0,
    sunrise: 0,
    clouds: 0,
    weather: 'Clear sky',
  },
  mode: 'day',
}

const currentWeatherSlice = createSlice({
  name,
  initialState,

  reducers: {
    
  },
  extraReducers: {
    [getCurrentStateWeather.pending]: (state) => {
      console.log(state);
      state.status = 'loading'
      state.error = null
    },
    [getCurrentStateWeather.fulfilled]: (state, action) => {
      state.status = 'success'
      state.error = null
      state.currentWeather = fillField(action)
      state.mode = checkDay(state.currentWeather.sunset, state.currentWeather.sunrise, state.currentWeather.date)
    },
    [getCurrentStateWeather.pending]: (state, action) => {
      state.status = null
      state.error = action.payload
    },
  }
})

export default currentWeatherSlice.reducer
