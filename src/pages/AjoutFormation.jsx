import TechnoForm from "../components/technoForm/TechnoForm";

const AjoutFormation = () => {
  return (
    <div>
      <h1>Ajouter une nouvelle formation</h1>
      <TechnoForm isEditMode={false} />
    </div>
  );
};

export default AjoutFormation;
