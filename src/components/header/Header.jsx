import styles from "./Header.module.scss";
import reactLogo from "../../assets/images/react_logo.webp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <i className="fa-solid fa-bars mr-15"></i>
      <div className="flex-fill">
        <Link to="/">
          <img src={reactLogo} alt="logo react" />
        </Link>
      </div>
      <ul>
        <Link to="/ajout">
          <button className="mr-5 btn btn-primary">
            <i className="fa-solid fa-basket-shopping mr-5"></i>
            <span>Nouvelle Formation</span>
          </button>
        </Link>
        <Link to="/favoris">
          <button className="mr-5 btn btn-reverse-primary">
            <i className="fa-solid fa-basket-shopping mr-5"></i>
            <span>Favoris</span>
          </button>
        </Link>
        <button className="btn btn-primary">connexion</button>
      </ul>
    </header>
  );
};

export default Header;
