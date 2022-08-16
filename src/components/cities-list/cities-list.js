import './cities-list.scss'

export const CitiesList = () => {
  return <ul className="cities">
    <li className="cities__item">
      <button className="cities__btn" data-city="samarkand">Samarkand</button>
    </li>
    <li className="cities__item">
      <button className="cities__btn" data-city="khorazm">Khorazm</button>
    </li>
    <li className="cities__item">
      <button className="cities__btn" data-city="karshi">Karshi</button>
    </li>
    <li className="cities__item">
      <button className="cities__btn" data-city="andijan">Andijan</button>
    </li>
  </ul>
}
