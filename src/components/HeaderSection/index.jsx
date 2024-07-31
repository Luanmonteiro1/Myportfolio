import { Link } from "react-router-dom";
import styles from "./style.module.css";


export const Header = () => {
  return (
    <header className="container">
      <div className={styles.headerInfos}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">Sobre mim</Link>
          <Link to="">Tecnológias</Link>
          <Link to="">Projetos</Link>
          <Link to="">Contato</Link>
        </nav>
      </div>
    </header>
  );
};
