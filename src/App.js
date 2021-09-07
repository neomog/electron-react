import ReactWeather, {useOpenWeather} from 'react-open-weather';
import './App.css';

function App() {
  const {data, isLoading, errorMessage} = useOpenWeather({
    key: 'ca1245b177d09861b962a8946ec81726',
    lat: '1.2921',
    lon: '36.8219',
    lang: 'en',
    unit: 'metric',
  });
  return (
    <div className="App">
      <h3>A simple weather app with Electron/react</h3>
      <ReactWeather isLoading={isLoading} 
        errorMessage={errorMessage} 
        data={data} 
        lang="en" 
        locationLabel="Nairobi" 
        unitsLabel={{temerature: 'C', windSpeed: 'Km/h'}} 
        showForecast
      />
      
    </div>
  );
}

export default App;
