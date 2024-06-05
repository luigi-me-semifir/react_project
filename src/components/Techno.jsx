import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styles from "./Techno.module.scss";

function Techno({ nom, image }) {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };
  return (
    <div onClick={handleClick} className={styles.techno}>
      <div className={styles.imageContainer}>
        <img src={image} alt={nom} />
      </div>
      <div
        className={`${styles.technoTitle} d-flex flex-row justify-content-around align-items-center`}
      >
        <h3 className="mb-10">{nom}</h3>
        <i>{liked ? <FaHeart /> : <FaRegHeart />} </i>
      </div>
    </div>
  );
}

export default Techno;
