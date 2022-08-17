import hoc from "@utils/hoc";
import { useCitiesListProp } from "./cities-list.prop";
import "./cities-list.scss";

export const CitiesList = hoc(
  useCitiesListProp,
  ({ handleCitiesListClick, localCities }) => {
    return (
      <ul className="cities" onClick={handleCitiesListClick}>
        {localCities?.length > 0 &&
          localCities.map((city) => (
            <li className="cities__item" key={city.id}>
              <button
                className="cities__btn"
                data-name={city.name}
                id={city.id}
              >
                {city.name}
              </button>
            </li>
          ))}
      </ul>
    );
  }
);
