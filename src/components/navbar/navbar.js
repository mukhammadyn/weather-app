import { CitiesList } from '../cities-list/cities-list'
import './navbar.scss'
import searchIcon from '@images/icon-search.svg'
import { WeatherDetail } from '../weather-detail'

export const Navbar = () => {
  return <section className="navbar">
    <h2 className='visually-hidden'>The weather</h2>
    <form className="navbar__form" action='https://echo.htmlacademy.ru' method='GET'>
      <input className="navbar__form-control" type="search" name="location" aria-label="Another location" placeholder="Another location" />
      <button className="navbar__form-btn" type="submit">
        <img src={searchIcon} alt="search" width="35" height="35" />
      </button>
    </form>
    <CitiesList />
    <WeatherDetail />
  </section>
}
