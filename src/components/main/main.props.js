import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentStateWeather } from "./main.slice";

export const useMainProps = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    function success(pos) {
      const crd = pos.coords;
      const lat = crd.latitude
      const lon = crd.longitude
      dispatch(getCurrentStateWeather({lat, lon}))
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch])

  const {currentWeather, mode} = useSelector(state => state.currentWeather)
  
  if(mode === 'night') {
    document.body.style.backgroundColor = 'rgb(0,0,0)'
    document.body.style.backgroundImage = 'linear-gradient(152deg, rgba(0,0,0,1) 0%, rgba(61,61,61,1) 50%, rgba(91,91,91,1) 100%)'
  } else {
    document.body.style.backgroundColor = 'rgb(154,193,218)'
    document.body.style.backgroundImage = 'linear-gradient(173deg, rgba(154,193,218,1) 0%, rgba(41,143,202,1) 100%)'
  }

  const currentDate = currentWeather.date

  return {
    degree: currentWeather.temp.toString().substring(0,2),
    name: currentWeather.name,
    date: currentDate?.hours + ':' + currentDate?.minutes + ' - ' + currentDate?.weekName  + ', ' + currentDate?.yearSlice + ' ' + currentDate?.month?.substring(0,3) + ' \'' + currentDate?.day,
    cloudy: currentWeather.clouds,
    humidity: currentWeather.humidity,
    wind: currentWeather.wind,
    weather: currentWeather.weather,
    mode,
  }

}
