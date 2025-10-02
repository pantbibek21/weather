import { useState } from "react";
import "./App.css";
import Form from "./component/Form";
import Header from "./component/Header";
import Layout from "./component/Layout";

function App() {
  const [weatherData, setWeatherData] = useState();

  console.log("Weather data in parent:");
  console.log(weatherData);

  return (
    <>
      <div className="page-container">
        <Header />
        <Form setWeatherData={setWeatherData} />
        {weatherData && <Layout data={weatherData} />}
      </div>
    </>
  );
}

export default App;
