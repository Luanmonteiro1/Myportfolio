import styles from "./style.module.css"

export const TechCard = ({ img, title }) => {
  return (
    <li>
      <div className={styles.itensList}>
        <img src={img} alt="" />
        <span className="tittle3">{title}</span>
      </div>
    </li>
  );
};

