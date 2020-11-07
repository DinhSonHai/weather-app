const config = require('config');
const api = {
  key: config.get('WEATHER_API_KEY'),
  base: 'https://api.openweathermap.org/data/2.5/'
}
function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..."/> 
        </div>
      </main>
    </div>
  );
}

export default App;
