import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { useNavigate } from "react-router-dom";
import AddFormation from "../../services/addFormation";
import styles from "./TechnoForm.module.scss";

const TechnoForm = ({ isEditMode, existingTechno }) => {
  const navigate = useNavigate();
  const [techno, setTechno] = useState({ nom: "", image: "" });

  useEffect(() => {
    if (isEditMode && existingTechno) {
      setTechno(existingTechno);
    }
  }, [isEditMode, existingTechno]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTechno((prevTechno) => ({ ...prevTechno, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isEditMode) {
      // Update existing techno
      updateFormation({ ...techno });
    } else {
      // Add new techno
      const newTechno = {
        ...techno,
        id: uuidv4(), // Générer un id unique pour un nouvel ajout
      };
      addFormation(newTechno);
    }
  };

  const addFormation = (newTechno) => {
    AddFormation.addTechno(newTechno)
      .then(() => navigate("/"))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const updateFormation = (updatedTechno) => {
    AddFormation.updateTechno(updatedTechno)
      .then(() => navigate("/"))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex">
        {isEditMode && (
          <>
            <img className={styles.img} src={techno.image} alt={techno.nom} />
          </>
        )}
        <div className="d-flex flex-column">
          <div className="d-flex flex-column mb-20">
            <label>Nom:</label>
            <input
              type="text"
              name="nom"
              value={techno.nom}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex flex-column mb-20">
            <label>Image:</label>
            <input
              type="text"
              name="image"
              value={techno.image}
              onChange={handleChange}
            />
          </div>
          <button type="submit">
            {isEditMode ? "Mettre à jour" : "Ajouter"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default TechnoForm;
