import { useEffect, useState } from "react";
import styles from "./Form.module.scss";

const Form = ({ setWeatherData }) => {
  const [userInput, setUserInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState({ lat: null, lon: null });

  console.log("I am in child");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!userInput) {
      setErrorMsg("Enter the location first!");
      return false;
    }
    setIsLoading(true);

    // get the coordinates using geocoding api
    const coordinates = await geoCodeUserInput();

    setLocation(coordinates);

    // call the weather api
    getWeather(coordinates);
  };

  async function getWeather(coordinates) {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const url = `${`https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely&units=metric&appid=`}${API_KEY}`;
    const response = await fetch(url);

    try {
      if (!response.ok) {
        setErrorMsg("Something wrong with weather provider! Not our fault : )");
        throw new Error(response.status);
      }
      const result = await response.json();
      setIsLoading(false);
      // pass the weather data to parent component
      console.log(result);
      setWeatherData(result);
    } catch (error) {
      console.log(error);
      setErrorMsg(
        "Ohh boy! Sorry, we can't help you right now! Some error occured!"
      );
    }
  }

  const handleChange = (e) => {
    setErrorMsg("");
    setUserInput(e.target.value);
  };

  const onLocationClick = async () => {
    if (navigator.geolocation) {
      setIsLoading(true);
      try {
        const coordinates = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setIsLoading(false);
              resolve({
                lat: position.coords.latitude,
                lon: position.coords.longitude,
              });
            },
            (err) => {
              setIsLoading(false);
              reject(err);
            }
          );
        });

        getWeather(coordinates);
      } catch (err) {
        setErrorMsg("Sorry, turn on the location!");
      }
    }
  };

  async function geoCodeUserInput() {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const url = `${`http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=1&appid=`}${API_KEY}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setErrorMsg(
          "Ohh no! The serviceman to fetch weather is sick! Contact admin!"
        );
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      return { lat: result[0].lat, lon: result[0].lon };
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <section className={styles.formWrapper}>
      <form onSubmit={submitHandler}>
        <div className={styles.inputField}>
          <input
            type="text"
            placeholder="Enter city name..."
            onChange={handleChange}
            value={userInput}
          />
        </div>
        <button type="submit">Search</button>
      </form>
      <p className={styles.note}>
        Get most accurate weather of your area, turning{" "}
        <span onClick={onLocationClick}>location</span> on!
      </p>
      {errorMsg && <p className={styles.errorMsg}>{errorMsg}</p>}

      {isLoading && <p>Loading 🙂...</p>}
    </section>
  );
};

export default Form;
