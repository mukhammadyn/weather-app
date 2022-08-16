import { configureStore } from '@reduxjs/toolkit';
import mainSlice from '../components/main/main.slice';

export const store = configureStore({
  reducer: {
    currentWeather: mainSlice
  },
});
