import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback, useState } from 'react';
import ErrorBox from '../ErrorBox/ErrorBox';

const WeatherBox = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const handleCityChange = useCallback((cityName) => {
    console.log(cityName);

    setPending(true);
    setError(false);
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cb98283567cbd64074522f5db207fdf4&units=metric`
    ).then((res) => {
      if (res.status === 200) {
        return res.json().then((data) => {
          console.log(data);
          const weatherData = {
            city: data.name,
            temp: data.main.temp,
            icon: data.weather[0].icon,
            description: data.weather[0].main,
          };
          setWeatherData(weatherData);
          setPending(false);
        });
      } else {
        setError(true);
      }
    });
  }, []);

  return (
    <section>
      <PickCity action={handleCityChange} />
      {pending && !error && <Loader />}
      {error && <ErrorBox />}
      {weatherData && !pending && !error && <WeatherSummary {...weatherData} />}
    </section>
  );
};

export default WeatherBox;
