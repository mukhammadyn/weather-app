import { Navbar } from "../navbar/navbar"
import { WeatherMainInfo } from "../weather-main-info"

import './main.scss'

export const Main = () => {
  return <main className="main">
    <WeatherMainInfo />
    <Navbar />
  </main>
}
