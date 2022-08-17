import { CityName } from "../city-name";
import { Date } from "../date";
import { Degree } from "../degree";
import { WeatherMode } from "../weather-mode";
import { useWeatherInfoProps } from "./weather-main-info.props";

import "./weather-main-info.scss";

import aerostatImg from "@images/aerostat2.png";
import hoc from "@utils/hoc";

export const WeatherMainInfo = hoc(
  useWeatherInfoProps,
  ({ degree, name, date, theme }) => {
    return (
      <section className={`weather-main ${theme}`}>
        <a
          className="weather-main__logo"
          href="https://dribbble.com/shots/7767460-Weather-App-Website/attachments/448095?mode=media"
          target="_blank"
          rel="noreferrer"
        >
          the.weather
        </a>
        <div className="weather-main__info">
          <img
            className="weather-main__info-img"
            src={aerostatImg}
            alt="Aerostat"
            width="300"
            height="265"
          />
          <Degree>{degree}</Degree>
          <div className="weather-main__content">
            <div className="weather-main__city-date">
              <CityName>{name}</CityName>
              <Date>{date}</Date>
            </div>
            <WeatherMode />
          </div>
        </div>
      </section>
    );
  }
);
