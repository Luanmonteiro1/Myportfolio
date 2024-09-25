import styles from "./style.module.css"

export const TechCard = ({ img, title }) => {
  return (
    <li className="animate__animated animate__backInLeft">
      <div className={styles.itensList}>
        <img src={img} alt="" />
        <span className="tittle3">{title}</span>
      </div>
    </li>
  );
};

