import styles from "./Layout.module.scss";
import { FaArrowUp, FaArrowDown, FaCloud } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { WiSunset } from "react-icons/wi";
import { TbUvIndex } from "react-icons/tb";
import { SlEnergy } from "react-icons/sl";
import { MdAir } from "react-icons/md";

const Layout = () => {
  return (
    <section className={styles.layoutContainer}>
      <div className={styles.topRow}>
        <div className={styles.left}>
          <h2 className={styles.sectionHeading}>Current Weather</h2>
          <div className={styles.largeContent}>
            <div className={styles.iconWrapper}>
              <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" />
            </div>
            <p className={styles.currentTemp}>23&nbsp;&deg;</p>
          </div>
          <p className={styles.currentSituation}>broken clouds</p>
          <p className={styles.feelsLike}>(Feels like 27&nbsp;&deg;)</p>
        </div>

        <div className={styles.right}>
          <div className={`${styles.max} ${styles.card}`}>
            <p className={styles.label}>Max</p>
            <div className={styles.iconWrapper}>
              <FaArrowUp className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>21&deg;</span>
          </div>

          <div className={`${styles.min} ${styles.card}`}>
            <p className={styles.label}>Min</p>
            <div className={styles.iconWrapper}>
              <FaArrowDown className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>21&deg;</span>
          </div>

          <div className={`${styles.sunrise} ${styles.card}`}>
            <p className={styles.label}>Sunrise</p>
            <div className={styles.iconWrapper}>
              <IoSunnySharp className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>21&deg;</span>
          </div>

          <div className={`${styles.sunset} ${styles.card}`}>
            <p className={styles.label}>Sunset</p>
            <div className={styles.iconWrapper}>
              <WiSunset className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>21&deg;</span>
          </div>

          <div className={`${styles.uvi} ${styles.card}`}>
            <p className={styles.label}>Uvi</p>
            <div className={styles.iconWrapper}>
              <TbUvIndex className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>21&deg;</span>
          </div>

          <div className={`${styles.pressure} ${styles.card}`}>
            <p className={styles.label}>Pressure</p>
            <div className={styles.iconWrapper}>
              <SlEnergy className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>21&deg;</span>
          </div>

          <div className={`${styles.cloud} ${styles.card}`}>
            <p className={styles.label}>Cloud</p>
            <div className={styles.iconWrapper}>
              <FaCloud className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>21&deg;</span>
          </div>

          <div className={`${styles.windSpeed} ${styles.card}`}>
            <p className={styles.label}>Wind</p>
            <div className={styles.iconWrapper}>
              <MdAir className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>21&deg;</span>
          </div>
        </div>
      </div>

      <div className={styles.nextHourWeatherSection}>
        <h2 className={styles.sectionHeading}>New few hours</h2>
        <div className={styles.cardContainer}>
          <div className={`${styles.max} ${styles.card}`}>
            <p className={styles.label}>Max</p>
            <div className={styles.iconWrapper}>
              <FaArrowUp className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>21&deg;</span>
          </div>

          <div className={`${styles.min} ${styles.card}`}>
            <p className={styles.label}>Min</p>
            <div className={styles.iconWrapper}>
              <FaArrowDown className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>21&deg;</span>
          </div>

          <div className={`${styles.sunrise} ${styles.card}`}>
            <p className={styles.label}>Sunrise</p>
            <div className={styles.iconWrapper}>
              <IoSunnySharp className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>21&deg;</span>
          </div>

          <div className={`${styles.sunset} ${styles.card}`}>
            <p className={styles.label}>Sunset</p>
            <div className={styles.iconWrapper}>
              <WiSunset className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>21&deg;</span>
          </div>

          <div className={`${styles.uvi} ${styles.card}`}>
            <p className={styles.label}>Uvi</p>
            <div className={styles.iconWrapper}>
              <TbUvIndex className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>21&deg;</span>
          </div>

          <div className={`${styles.pressure} ${styles.card}`}>
            <p className={styles.label}>Pressure</p>
            <div className={styles.iconWrapper}>
              <SlEnergy className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>21&deg;</span>
          </div>

          <div className={`${styles.cloud} ${styles.card}`}>
            <p className={styles.label}>Cloud</p>
            <div className={styles.iconWrapper}>
              <FaCloud className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>21&deg;</span>
          </div>
        </div>
      </div>

      <div className={styles.weekForcastSection}>
        <h2 className={styles.sectionHeading}>New few days</h2>
        <div className={styles.cardContainer}>
          <div className={`${styles.max} ${styles.card}`}>
            <p className={styles.label}>Max</p>
            <div className={styles.iconWrapper}>
              <FaArrowUp className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>21&deg;</span>
          </div>

          <div className={`${styles.min} ${styles.card}`}>
            <p className={styles.label}>Min</p>
            <div className={styles.iconWrapper}>
              <FaArrowDown className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>21&deg;</span>
          </div>

          <div className={`${styles.sunrise} ${styles.card}`}>
            <p className={styles.label}>Sunrise</p>
            <div className={styles.iconWrapper}>
              <IoSunnySharp className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>21&deg;</span>
          </div>

          <div className={`${styles.sunset} ${styles.card}`}>
            <p className={styles.label}>Sunset</p>
            <div className={styles.iconWrapper}>
              <WiSunset className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>21&deg;</span>
          </div>

          <div className={`${styles.uvi} ${styles.card}`}>
            <p className={styles.label}>Uvi</p>
            <div className={styles.iconWrapper}>
              <TbUvIndex className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>21&deg;</span>
          </div>

          <div className={`${styles.pressure} ${styles.card}`}>
            <p className={styles.label}>Pressure</p>
            <div className={styles.iconWrapper}>
              <SlEnergy className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>21&deg;</span>
          </div>

          <div className={`${styles.cloud} ${styles.card}`}>
            <p className={styles.label}>Cloud</p>
            <div className={styles.iconWrapper}>
              <FaCloud className={styles.icon} />{" "}
            </div>
            <span className={styles.value}>21&deg;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
