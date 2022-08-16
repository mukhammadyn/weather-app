import './weather-detail.scss'

export const WeatherDetail = () => {
  return (
    <section className="weather-detail">
      <h3 className="weather-detail__heading">Weather details</h3>
      <dl className="weather-detail__desc-list">
        <div className="weather-detail__info-wrapper">
          <dt className="weather-detail__desc-heading">Cloudy</dt>
          <dd className="weather-detail__desc-info">12%</dd>
        </div>
        <div className="weather-detail__info-wrapper">
          <dt className="weather-detail__desc-heading">Humidity</dt>
          <dd className="weather-detail__desc-info">78%</dd>
        </div>
        <div className="weather-detail__info-wrapper">
          <dt className="weather-detail__desc-heading">Wind</dt>
          <dd className="weather-detail__desc-info">1km/h</dd>
        </div>
        <div className="weather-detail__info-wrapper">
          <dt className="weather-detail__desc-heading">Rain</dt>
          <dd className="weather-detail__desc-info">0mm</dd>
        </div>
      </dl>
    </section>
  );
};
