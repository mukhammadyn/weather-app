import hoc from "@utils/hoc";

import { CitiesList } from "../cities-list/cities-list";
import { WeatherDetail } from "../weather-detail";
import { useNavbarProps } from "./navbar.props";

import "./navbar.scss";
import searchIcon from "@images/icon-search.svg";

export const Navbar = hoc(
  useNavbarProps,
  ({ value, setValue, handleFormSubmit }) => {
    return (
      <section className="navbar">
        <h2 className="visually-hidden">The weather</h2>
        <form
          className="navbar__form"
          action="https://echo.htmlacademy.ru"
          method="GET"
          onSubmit={handleFormSubmit}
        >
          <input
            className="navbar__form-control"
            type="search"
            name="location"
            aria-label="Another location"
            placeholder="Another location"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="navbar__form-btn" type="submit">
            <img src={searchIcon} alt="search" width="35" height="35" />
          </button>
        </form>
        <CitiesList />
        <WeatherDetail />
      </section>
    );
  }
);
