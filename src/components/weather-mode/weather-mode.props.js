import { useSelector } from "react-redux";
import sunIcon from "@images/icon-sun.svg";
import cloudyIcon from "@images/icon-cloudy.svg";
import cloudIcon from "@images/icon-cloud.svg";
import mistIcon from "@images/mist.svg";
import rainIcon from "@images/icon-rain.svg";

export const useWeatherModeProps = () => {
  const weather = useSelector(
    (state) => state.currentWeather.currentWeather.weather
  );
  const weatherModes = {
    "clear sky": { name: "sunny", icon: sunIcon },
    "broken clouds": { name: "few clouds", icon: cloudyIcon },
    "few clouds": { name: "few clouds", icon: cloudyIcon },
    "scattered clouds": { name: "half-cloudy", icon: cloudIcon },
    "mist": { name: "mist", icon: mistIcon },
    "overcast clouds": { name: "overcast clouds", icon: cloudIcon },
    "light intensity shower rain": { name: "rain", icon: rainIcon },
    "light rain": { name: "rain", icon: rainIcon },
  };

  const currentWeather = weatherModes[weather?.toLowerCase()] ?? weatherModes['clear sky'];

  return {
    name: currentWeather.name,
    icon: currentWeather.icon,
  };
};
