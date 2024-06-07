import { useState, useEffect } from "react";
import Content from "../components/contenue/Content";
import AddFormation from "../services/addFormation";

const Home = () => {
  const [technos, setTechnos] = useState([]);

  useEffect(() => {
    AddFormation.getTechno().then((techno) => setTechnos(techno));
  }, []);

  return <Content technos={technos} />;
};

export default Home;
