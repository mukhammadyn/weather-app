import React from "react";
import { useSelector } from "react-redux";
import { Loader } from "./components/loader";
import { Main } from "./components/main";

function App() {
  const {status} = useSelector(state => state.currentWeather)

  return (
    <article className="container">
      {
        status === 'loading' ? <Loader /> : <Main />
      }
    </article>
  );
}

export default App;
