import styles from "./Content.module.scss";
import Techno from "./Techno";
import { data } from "../data/technos";

const Content = () => {
  const technos = data;

  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30">Découvrez nos différentes formations</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
        <div className={styles.grid}>
          {technos.map((techno) => (
            <Techno key={techno._id} nom={techno.nom} image={techno.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
