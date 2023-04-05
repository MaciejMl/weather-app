import styles from './WeatherSummary.module.scss';

const WeatherSummary = () => {
  return (
    <section className={styles.weatherSummary}>
      <img
        className={styles.weatherIcon}
        alt="????"
        src={`${process.env.PUBLIC_URL}/images/weather-icons/13d.png`} />
      <div className={styles.weatherInfo}>
        <h2>London</h2>
        <p>
          <strong>Temp:</strong> 20°C
        </p>
      </div>
    </section>
  );
};

export default WeatherSummary;