import { useContext, useState } from "react";
import styles from "./IconButton.module.css";
import RpsContext from "../store/rps-ctx";
import rock from "../assets/icon-rock.svg";
import paper from "../assets/icon-paper.svg";
import scissor from "../assets/icon-scissors.svg";

const IconButton = ({ icon, isDisabled = false }) => {
  const rpsCtx = useContext(RpsContext);

  let showIcon;
  icon === "rock"
    ? (showIcon = rock)
    : icon === "paper"
    ? (showIcon = paper)
    : (showIcon = scissor);

  const handleClick = () => {
    if (!isDisabled) {
      rpsCtx.handlePlayerPick(icon);
    }
  };
  return (
    <div
      className={`${styles.iconButton} ${styles[icon]}`}
      onClick={handleClick}
      disable={isDisabled}
    >
      <div>
        <img src={showIcon} alt={`${icon} icon`} />
      </div>
    </div>
  );
};

export default IconButton;
