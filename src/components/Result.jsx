import IconButton from "./IconButton";
import styles from "./Result.module.css";
import { useContext } from "react";
import RpsContext from "../store/rps-ctx";

const Result = () => {
  const rpsCtx = useContext(RpsContext);

  const handleClick = () => {
    rpsCtx.reset();
  };

  return (
    <div className={styles.layout}>
      <div className={styles.badge}>
        <h2>You picked</h2>
        <IconButton icon={rpsCtx.playerPick} isDisabled={true} />
      </div>
      <div className={styles.badge}>
        <h2>The house picked</h2>
        <IconButton icon={rpsCtx.housePick} isDisabled={true} />
      </div>
      <div className={styles.details}>
        <h1>
          {rpsCtx.winner === "player"
            ? "You win"
            : rpsCtx.winner === "draw"
            ? "Draw"
            : "You lose"}
        </h1>
        <button onClick={handleClick}>Play again</button>
      </div>
    </div>
  );
};

export default Result;
