import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import {
  getCurrentLocationWeather,
  getSearchedLocationWeather,
} from "@api/rest/fetch-country";
import getDateInfo from "@utils/getDateInfo";

export const getCurrentStateWeather = createAsyncThunk(
  "currentWeather/getCurrentStateWeather",
  async ({ lat, lon }) => {
    const data = await getCurrentLocationWeather(lat, lon);
    return data;
  }
);

export const getSearchedWeather = createAsyncThunk(
  "currentWeather/getSearchedWeather",
  async (country, { dispatch }) => {
    const data = await getSearchedLocationWeather(country);
    if (!data) {
      dispatch(getCurrentLocationWeather());
    }
    return data;
  }
);

const fillField = (action) => {
  const payload = action.payload;
  return {
    sky: payload.weather?.main ?? "Clear",
    temp: payload.main?.temp ?? "no info",
    humidity: payload.main?.humidity ?? "no info",
    wind: payload.wind?.speed ?? "no info",
    date: getDateInfo(payload.dt * 1000) ?? "no info",
    name: payload.name,
    clouds: payload.clouds?.all ?? 0,
    country: payload.sys?.country ?? "no info",
    sunrise: payload.sys?.sunrise ?? 1660609977,
    sunset: payload.sys?.sunset ?? 1660659726,
    weather: payload.weather?.at(0)?.description,
    rain: payload.rain ? payload.rain["1h"] : 0,
  };
};

const name = "currentWeather";

const initialState = {
  status: null,
  error: null,
  currentWeather: {
    sky: "Clear",
    temp: 0,
    humidity: 0,
    wind: 0,
    date: new Date().toISOString(),
    name: "",
    country: "",
    sunset: 0,
    sunrise: 0,
    clouds: 0,
    weather: "Clear sky",
    rain: 0,
  },
  localCities: [
    {
      id: nanoid(),
      name: "Samarkand",
    },
    {
      id: nanoid(),
      name: "Navai",
    },
    {
      id: nanoid(),
      name: "Bukhara",
    },
    {
      id: nanoid(),
      name: "Andijan",
    },
  ],
};

const currentWeatherSlice = createSlice({
  name,
  initialState,

  reducers: {},
  extraReducers: {
    [getCurrentStateWeather.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getCurrentStateWeather.fulfilled]: (state, action) => {
      state.status = "success";
      state.error = null;
      state.currentWeather = fillField(action);
    },
    [getCurrentStateWeather.rejected]: (state, action) => {
      state.status = null;
      state.error = action.payload;
    },
    [getSearchedWeather.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getSearchedWeather.fulfilled]: (state, action) => {
      return {
        ...state,
        status: "success",
        error: null,
        currentWeather: fillField(action),
      };
    },
    [getSearchedWeather.rejected]: (state, action) => {
      state.status = null;
      state.error = action.payload;
    },
  },
});

export const { changeMode } = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;
