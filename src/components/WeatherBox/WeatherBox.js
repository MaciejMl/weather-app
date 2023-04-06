import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback, useState } from 'react';

const WeatherBox = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [pending, setPending] = useState(false);
  const handleCityChange = useCallback((cityName) => {
    console.log(cityName);

    setPending(true);
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cb98283567cbd64074522f5db207fdf4&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPending(false);
        const weatherData = {
          city: data.name,
          temp: data.main.temp,
          icon: data.weather[0].icon,
          description: data.weather[0].main,
        };
        setWeatherData(weatherData);
      });
  }, []);

  return (
    <section>
      <PickCity action={handleCityChange} />
      {pending && !weatherData && <Loader />}
      {weatherData && <WeatherSummary {...weatherData} />}
    </section>
  );
};

export default WeatherBox;
