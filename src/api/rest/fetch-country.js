import makeRequest from "../make-request";

const URL = process.env.REACT_APP_URL
const API_KEY = process.env.REACT_APP_API_KEY

export const getCurrentLocationWeather = async (lat, lon) => {
  const res = await makeRequest({
    url: `${URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  });
  const data = await res.json()
  return data
};
