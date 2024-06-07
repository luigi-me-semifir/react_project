import styles from "./App.module.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import TechnosRouter from "./routes/TechnosRouter";

const App = () => {
  return (
    <div className={`d-flex flex-column ${styles.app}`}>
      <Header />
      <TechnosRouter />
      <Footer />
    </div>
  );
};

export default App;
