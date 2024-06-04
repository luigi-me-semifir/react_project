import styles from "./Techno.module.scss";

function Techno({ nom, image }) {
  return (
    <div className={styles.techno}>
      <div className={styles.imageContainer}>
        <img src={image} alt={nom} />
      </div>
      <div
        className={`${styles.technoTitle} d-flex flex-row justify-content-center align-items-center`}
      >
        <h3>{nom}</h3>
      </div>
    </div>
  );
}

export default Techno;
