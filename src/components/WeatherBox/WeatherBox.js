import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';

const WeatherBox = props => {
  return (
    <section>
      <PickCity />
      <WeatherSummary />
      <Loader />
    </section>
  )
};

export default WeatherBox;