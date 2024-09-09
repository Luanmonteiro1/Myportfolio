import { Link } from "react-router-dom";
import styles from "./style.module.css";
import Logo from "../../assets/minhalogo.png"


export const Header = () => {
  return (
    <header className="container">
      <div className={styles.headerInfos}>
        <img className={styles.logo} src={Logo} alt="" />
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/about">Sobre mim</Link>
          <Link to="/techs">Tecnológias</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="">Contato</Link>
        </nav>
      </div>
    </header>
  );
};
