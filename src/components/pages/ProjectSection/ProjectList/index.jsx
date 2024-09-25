import gitIcon from "../../../../assets/git-icon.png";
import styles from "./style.module.scss";

export const ProjectCard = ({ tittle, description, image, link, gitLink }) => {
  const handleButtonClick = () => {
    window.open(link, "_blank");
  };
  const handleButtonGitClick = () => {
    window.open(gitLink, "_blank");
  };
  return (
    <li className={`${styles.listProjects} animate__animated animate__backInLeft`}>
      <div className={styles.navCard}>
        <img src={image} alt="" />
        <h3 className="tittle3">{tittle}</h3>
      </div>
      <div className={styles.contentCard}>
        <span className="description">{description}</span>
        <button onClick={handleButtonClick} className="description">
          Conferir projeto
        </button>
        <img onClick={handleButtonGitClick} src={gitIcon} alt="git icon" />
      </div>
    </li>
  );
};
