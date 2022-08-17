import { useSelector } from "react-redux";

export const useWeatherInfoProps = () => {
  const clouds = useSelector(
    (state) => state.currentWeather.currentWeather.clouds
  );

  let theme = "";

  if (clouds >= 10 && clouds <= 50) theme = "weather-main--grey";
  else if (clouds > 50 && clouds <= 80) theme = "weather-main--black";
  else theme = "";

  return {
    theme,
  }
};
