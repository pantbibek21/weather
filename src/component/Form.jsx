import { useState } from "react";
import styles from "./Form.module.scss";

const Form = () => {
  const [userInput, setUserInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState({ lat: null, long: null });

  const submitHandler = (e) => {
    e.preventDefault();

    if (!userInput) {
      setErrorMsg("Enter the location first!");
      return;
    }
  };

  const handleChange = (e) => {
    setErrorMsg("");
    setUserInput(e.target.value);
  };

  const onLocationClick = () => {
    if (navigator.geolocation) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      setErrorMsg("Geolocation is not supported by this browser.");
    }
  };

  function success(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    setIsLoading(false);
    setLocation({ lat, long });
  }

  function error() {
    setErrorMsg("Sorry, turn on the location!");
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
