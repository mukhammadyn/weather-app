import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentStateWeather } from "./main.slice";

export const useMainProps = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      const lat = crd.latitude;
      const lon = crd.longitude;
      dispatch(getCurrentStateWeather({ lat, lon }));
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

  const { currentWeather } = useSelector((state) => state.currentWeather);

  if (currentWeather.clouds > 15 && currentWeather.clouds < 50) {
    document.body.style.backgroundColor = "rgb(154, 193, 218)";
    document.body.style.backgroundImage =
      "linear-gradient(173deg, rgb(115 153 178) 0%, rgb(69 121 151) 100%)";
  } else if (currentWeather.clouds >= 50 && currentWeather.clouds < 50) {
    document.body.style.backgroundColor = "rgb(120 157 180)";
    document.body.style.backgroundImage =
      "linear-gradient(173deg, rgb(53 90 114) 0%, rgb(39 72 91) 100%)";
  } else if (currentWeather.clouds >= 80) {
    document.body.style.backgroundColor = "rgb(91 99 104)";
    document.body.style.backgroundImage =
      "linear-gradient(173deg, rgb(26 41 51) 0%, rgb(27 52 67) 100%)";
  } else {
    document.body.style.backgroundColor = "rgb(154,193,218)";
    document.body.style.backgroundImage =
      "linear-gradient(173deg, rgba(154,193,218,1) 0%, rgba(41,143,202,1) 100%)";
  }

  const currentDate = currentWeather.date;

  return {
    degree: currentWeather.temp.toString().substring(0, 2),
    name: currentWeather.name,
    date:
      currentDate?.hours +
      ":" +
      currentDate?.minutes +
      " - " +
      currentDate?.weekName +
      ", " +
      currentDate?.yearSlice +
      " " +
      currentDate?.month?.substring(0, 3) +
      " '" +
      currentDate?.day,
    cloudy: currentWeather.clouds,
    humidity: currentWeather.humidity,
    wind: currentWeather.wind,
  };
};
