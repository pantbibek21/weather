import { useState } from "react";
import styles from "./Header.module.scss";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Header = ({ isDarkModeOn, setIsDarkModeOn }) => {
  function toggleDarkLightMode() {
    setIsDarkModeOn(!isDarkModeOn);
  }

  return (
    <header>
      <div className={styles.logoWrapper}>
        <h1>SkyCompass</h1>
      </div>

      <div className={styles.iconsWrapper}>
        <span
          onClick={() => toggleDarkLightMode()}
          className={`${styles.icon} ${isDarkModeOn ? styles.active : ""}`}
        >
          <MdOutlineLightMode />
        </span>
        <span
          onClick={() => toggleDarkLightMode()}
          className={`${styles.icon} ${!isDarkModeOn ? styles.active : ""}`}
        >
          <MdDarkMode />
        </span>
      </div>
    </header>
  );
};

export default Header;
