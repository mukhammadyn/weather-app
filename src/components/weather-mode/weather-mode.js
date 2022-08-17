import hoc from "../../utils/hoc";
import { useWeatherModeProps } from "./weather-mode.props";
import "./weather-mode.scss";

export const WeatherMode = hoc(useWeatherModeProps, ({ name, icon }) => {
  return (
    <div className="weather-mode">
      {name} <img src={icon} alt={name} width="24" height="24" />
    </div>
  );
});
