import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchedWeather } from "../main/main.slice";

export const useNavbarProps = () => {
  const [value, setValue] = useState("");
  
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      dispatch(getSearchedWeather(value.trim()));
    }

    setValue("");
  };

  return {
    value,
    setValue,
    handleFormSubmit,
  };
};
