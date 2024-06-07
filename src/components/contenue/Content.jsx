// import { useState } from "react";
import styles from "./Content.module.scss";
import Techno from "../card/Techno";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const Content = ({ technos }) => {
  const [filter, setFilter] = useState("");

  const handleInput = (event) => {
    const filter = event.target.value;
    setFilter(filter.toLowerCase());
  };

  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30">Découvrez nos différentes formations</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
        <div
          className={`d-flex flex-row justify-content-center align-item-center my-30 ${styles.searchBar}`}
        >
          <FaSearch className={`mr-15 ${styles.searchIcon}`} />
          <input
            onChange={handleInput}
            className="flex-fill"
            type="text"
            placeholder="Rechercher"
          />
        </div>
        <div className={styles.grid}>
          {technos
            .filter((techno) => techno.nom.toLowerCase().includes(filter))
            .map((techno) => (
              <Techno
                key={techno.id}
                nom={techno.nom}
                image={techno.image}
                id={techno.id}
                initialLiked={techno.like}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
