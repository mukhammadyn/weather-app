import hoc from "@utils/hoc";
import { Navbar } from "../navbar/navbar";
import { WeatherMainInfo } from "../weather-main-info";
import { useMainProps } from "./main.props";
import "./main.scss";

export const Main = hoc(
  useMainProps,
  ({ degree, name, date, }) => {
    return (
      <main className="main">
        <WeatherMainInfo
          degree={degree}
          name={name}
          date={date}
        />
        <Navbar />
      </main>
    );
  }
);
