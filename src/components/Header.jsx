import { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import RpsContext from "../store/rps-ctx";
import styles from "./Header.module.css";

const Header = () => {
  const rpsCtx = useContext(RpsContext);
  return (
    <header className={styles.header}>
      <div className={styles.box}>
        <img src={logo} alt="" />
        <div className={styles.score}>
          <p>score</p>
          <h2>{rpsCtx.score}</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
