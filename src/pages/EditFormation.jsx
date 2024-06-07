import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import TechnoForm from "../components/technoForm/TechnoForm";
import AddFormation from "../services/addFormation";
import { useNavigate } from "react-router-dom";

const EditFormation = () => {
  const { id } = useParams();
  const [existingTechno, setExistingTechno] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    AddFormation.getTechnoById(id).then((data) => setExistingTechno(data));
  }, [id]);

  const handleDelete = () => {
    AddFormation.deleteTechno(id).then(() => navigate(`/`));
  };

  return (
    <div>
      {existingTechno ? (
        <div className="flex-fill container p-20">
          <div className="d-flex justify-content-beetween">
            <h1>Modifier la formation {existingTechno.nom}</h1>
            <button className="mr-5 btn btn-primary" onClick={handleDelete}>
              Supprimer
            </button>
          </div>
          <TechnoForm isEditMode={true} existingTechno={existingTechno} />
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default EditFormation;
