import { useState, useEffect } from "react";
import Content from "../components/contenue/Content";
import AddFormation from "../services/addFormation";

const Favoris = () => {
  const [technos, setTechnos] = useState([]);

  useEffect(() => {
    AddFormation.getTechno().then((techno) => setTechnos(techno));
  }, []);

  const likedTechnos = technos.filter((techno) => techno.like === true);

  return <Content technos={likedTechnos} />;
};

export default Favoris;
