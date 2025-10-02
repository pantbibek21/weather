import styles from "./Layout.module.scss";
import { FaCloud } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { WiSunset } from "react-icons/wi";
import { TbUvIndex } from "react-icons/tb";
import { SlEnergy } from "react-icons/sl";
import { MdAir } from "react-icons/md";
// import data from "../data/data.json";

const Layout = ({ data }) => {
  console.log(data);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function getDays() {
    const today = new Date();
    const currentDayIndex = today.getDay();
    return currentDayIndex;
  }

  function convertTo12HourFormat(timestamp) {
    const date = new Date(timestamp * 1000);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesStr = String(minutes).padStart(2, "0");

    return `${hours}:${minutesStr} ${ampm}`;
  }

  return (
    <section className={styles.layoutContainer}>
      <div className={styles.topRow}>
        <div className={styles.left}>
          <h2 className={styles.sectionHeading}>Current Weather</h2>
          <div className={styles.largeContent}>
            <div className={styles.iconWrapper}>
              <img
                src={`https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
                alt=""
              />
            </div>
            <p className={styles.currentTemp}>{data.current.temp}&nbsp;&deg;</p>
          </div>
          <p className={styles.currentSituation}>
            {data.current.weather[0].description}
          </p>
          <p className={styles.feelsLike}>
            (Feels like {data.current.feels_like}&nbsp;&deg;)
          </p>
        </div>

        <div className={styles.right}>
          <div className={`${styles.sunrise} ${styles.card}`}>
            <p className={styles.label}>Sunrise</p>
            <div className={styles.iconWrapper}>
              <IoSunnySharp className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>
              {convertTo12HourFormat(data.current.sunrise)}
            </span>
          </div>

          <div className={`${styles.sunset} ${styles.card}`}>
            <p className={styles.label}>Sunset</p>
            <div className={styles.iconWrapper}>
              <WiSunset className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>
              {convertTo12HourFormat(data.current.sunset)}
            </span>
          </div>

          <div className={`${styles.uvi} ${styles.card}`}>
            <p className={styles.label}>Uvi</p>
            <div className={styles.iconWrapper}>
              <TbUvIndex className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>{data.current.uvi}</span>
          </div>

          <div className={`${styles.pressure} ${styles.card}`}>
            <p className={styles.label}>Pressure</p>
            <div className={styles.iconWrapper}>
              <SlEnergy className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>
              {data.current.pressure}&nbsp;hPa
            </span>
          </div>

          <div className={`${styles.cloud} ${styles.card}`}>
            <p className={styles.label}>Cloud</p>
            <div className={styles.iconWrapper}>
              <FaCloud className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>{data.current.clouds}&nbsp;%</span>
          </div>

          <div className={`${styles.windSpeed} ${styles.card}`}>
            <p className={styles.label}>Wind</p>
            <div className={styles.iconWrapper}>
              <MdAir className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>
              {data.current.wind_speed}&nbsp;m/s
            </span>
          </div>
        </div>
      </div>

      <div className={styles.nextHourWeatherSection}>
        <h2 className={styles.sectionHeading}>New few hours</h2>
        <div className={styles.cardContainer}>
          {data.hourly.map((item, index) => {
            if (index > 7) return false;
            return (
              <div className={`${styles.max} ${styles.card}`} key={index}>
                <p className={styles.label}>{convertTo12HourFormat(item.dt)}</p>
                <div className={styles.iconWrapper}>
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt=""
                  />
                </div>
                <span className={styles.value}>{item.temp}&deg;</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.weekForcastSection}>
        <h2 className={styles.sectionHeading}>New few days</h2>
        <div className={styles.cardContainer}>
          {data.daily.map((item, index) => {
            return (
              <div className={`${styles.max} ${styles.card}`} key={index}>
                <p className={styles.label}>
                  {days[(getDays() + index) % days.length]}
                </p>
                <div className={styles.iconWrapper}>
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt=""
                  />
                </div>
                <span className={styles.value}>{item.temp.day}&deg;</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Layout;
