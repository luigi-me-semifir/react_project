import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../components/contenue/Content.module.scss";
import AddFormation from "../services/addFormation";
import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";

const Details = () => {
  const [techno, setTechno] = useState("");
  const { id } = useParams();

  useEffect(() => {
    AddFormation.getTechnoById(id).then((techno) => setTechno(techno));
  }, [id]);

  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30">{techno.nom}</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
        <Link to={`/edit/${techno.id}`}>
          <FaPen />
        </Link>
        <img src={techno.image} />
      </div>
    </div>
  );
};

export default Details;
