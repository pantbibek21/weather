import { useState } from "react";
import "./App.css";
import Form from "./component/Form";
import Header from "./component/Header";
import Layout from "./component/Layout";

function App() {
  const [weatherData, setWeatherData] = useState();

  return (
    <>
      <div className="page-container">
        <Header />
        <Form setWeatherData={setWeatherData} />
        {weatherData && (
          <Layout data={weatherData} setWeatherData={setWeatherData} />
        )}
      </div>
    </>
  );
}

export default App;
