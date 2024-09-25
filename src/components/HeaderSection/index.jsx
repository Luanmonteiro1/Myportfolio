import { Link } from "react-router-dom";
import styles from "./style.module.css";
import Logo from "../../assets/minhalogo.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="container">
      <div className={`${styles.headerInfos} animate__animated animate__backInDown`}>
        <img className={styles.logo} src={Logo} alt="" />
        <button className={styles.menuButton} onClick={toggleMenu}>
          {" "}
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`${styles.nav} ${isOpen ? styles.active : ""}`}>
          <Link to="/" onClick={handleLinkClick}>Inicio</Link>
          <Link to="/about" onClick={handleLinkClick}>Sobre mim</Link>
          <Link to="/techs" onClick={handleLinkClick}>Tecnológias</Link>
          <Link to="/projects" onClick={handleLinkClick}>Projetos</Link>
        </nav>
      </div>
    </header>
  );
};
