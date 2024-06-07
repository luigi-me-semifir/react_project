import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styles from "./Techno.module.scss";
import AddFormation from "../../services/addFormation";
import { Link } from "react-router-dom";

function Techno({ nom, image, initialLiked, id }) {
  const [liked, setLiked] = useState(initialLiked);

  const handleClick = () => {
    const newLikedState = !liked;
    setLiked(newLikedState);

    AddFormation.patchTechno(id, { like: newLikedState })
      .then((updatedTechno) => {
        console.log("Techno updated successfully:", updatedTechno);
      })
      .catch((error) => {
        console.error("Error updating techno:", error);
        // Réinitialiser l'état en cas d'erreur
        setLiked(!newLikedState);
      });
  };

  return (
    <div className={styles.techno}>
      <Link to={`/${id}`}>
        <div className={styles.imageContainer}>
          <img src={image} alt={nom} />
        </div>
      </Link>
      <div
        className={`${styles.technoTitle} d-flex flex-row justify-content-around align-items-center`}
      >
        <h3 className="mb-10">{nom}</h3>
        <i onClick={handleClick}>{liked ? <FaHeart /> : <FaRegHeart />} </i>
      </div>
    </div>
  );
}

export default Techno;
