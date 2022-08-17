import makeRequest from "../make-request";

const URL = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const getCurrentLocationWeather = async (lat, lon) => {
  try {
    const res = await makeRequest({
      url: `${URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    });
    if(!res.ok) {
      throw new Error("Server error ", res.message)
    }
    const data = await res.json();
    return data;
  } catch(error) {
    console.error(error)
  }
};

export const getSearchedLocationWeather = async (country) => {
  try {
    const res = await makeRequest({
      url: `${URL}?q=${country}&appid=${API_KEY}`,
    });
    if (!res.ok) {
      throw new Error("Server error ", res.message);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
