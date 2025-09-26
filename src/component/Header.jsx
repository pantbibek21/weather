import { useState } from "react";
import styles from "./Header.module.scss";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  const [isLightModeActive, setIsLightModeActive] = useState(true);
  return (
    <header>
      <div className={styles.logoWrapper}>
        <h1>SkyCompass</h1>
      </div>

      <div className={styles.iconsWrapper}>
        <span
          onClick={() => setIsLightModeActive(!isLightModeActive)}
          className={`${styles.icon} ${isLightModeActive ? styles.active : ""}`}
        >
          <MdOutlineLightMode />
        </span>
        <span
          onClick={() => setIsLightModeActive(!isLightModeActive)}
          className={`${styles.icon} ${
            !isLightModeActive ? styles.active : ""
          }`}
        >
          <MdDarkMode />
        </span>
      </div>
    </header>
  );
};

export default Header;
