import IconButton from "./IconButton";
import styles from "./ButtonLayout.module.css";

const ButtonLayout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.paperWrapper}>
        <IconButton icon="paper" />
      </div>
      <div className={styles.scissorWrapper}>
        <IconButton icon="scissor" />
      </div>
      <div className={styles.rockWrapper}>
        <IconButton icon="rock" />
      </div>
    </div>
  );
};

export default ButtonLayout;
