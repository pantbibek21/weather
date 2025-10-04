import { use, useState } from "react";
import "./App.css";
import Form from "./component/Form";
import Header from "./component/Header";
import Layout from "./component/Layout";

function App() {
  const [weatherData, setWeatherData] = useState();
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  return (
    <div className={`page-wrapper ${isDarkModeOn ? "darkModeOn" : ""}`}>
      <div className={`page-container ${isDarkModeOn ? "darkModeOn" : ""}`}>
        <Header isDarkModeOn={isDarkModeOn} setIsDarkModeOn={setIsDarkModeOn} />
        <Form setWeatherData={setWeatherData} isDarkModeOn={!isDarkModeOn} />
        {weatherData && (
          <Layout
            data={weatherData}
            setWeatherData={setWeatherData}
            isDarkModeOn={isDarkModeOn}
          />
        )}
      </div>
    </div>
  );
}

export default App;
