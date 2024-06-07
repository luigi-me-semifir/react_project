import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import AjoutFormation from "../pages/AjoutFormation";
import EditFormation from "../pages/EditFormation";
import Favoris from "../pages/Favoris";

const TechnosRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Details />} />
      <Route path="/ajout" element={<AjoutFormation />} />
      <Route path="/edit/:id" element={<EditFormation />} />
      <Route path="/favoris" element={<Favoris />} />
    </Routes>
  );
};

export default TechnosRouter;
