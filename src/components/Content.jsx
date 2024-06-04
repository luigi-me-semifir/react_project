import styles from "./Content.module.scss";
import Techno from "./Techno";

const Content = () => {
  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30">Découvrez nos différentes formations</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
        <div className={styles.grid}>
          <div className={styles.elem}>Element</div>
          <div className={styles.elem}>Element</div>
          <div className={styles.elem}>Element</div>
          <div className={styles.elem}>Element</div>
          <div className={styles.elem}>Element</div>
          <div className={styles.elem}>Element</div>
          <div className={styles.elem}>Element</div>
          <div className={styles.elem}>Element</div>
          <div className={styles.elem}>Element</div>
          <Techno />
        </div>
      </div>
    </div>
  );
};

export default Content;
