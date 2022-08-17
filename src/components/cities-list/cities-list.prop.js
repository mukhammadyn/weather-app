import { useDispatch, useSelector } from "react-redux";
import { getSearchedWeather } from "../main/main.slice";

export const useCitiesListProp = () => {
  const localCities = useSelector((state) => state.currentWeather.localCities);
  const dispatch = useDispatch();

  const handleCitiesListClick = (e) => {
    if (e.target.matches(".cities__btn")) {
      dispatch(getSearchedWeather(e.target.dataset.name));
    }
  };

  return {
    localCities,
    handleCitiesListClick,
  }
};
