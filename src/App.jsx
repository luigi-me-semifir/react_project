import styles from "./App.module.scss";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className={`d-flex flex-column ${styles.app}`}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
