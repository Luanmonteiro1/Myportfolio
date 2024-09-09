import { technologies } from "../../../data/technologies";
import styles from "./style.module.css"
import { TechCard } from "./TechList";


export const TechSection = () => {
    return (
      <section className="container">
        <div className={styles.host}>
          <h2 className="tittle2">Tecnológias</h2>
          <ul className={styles.card}>
            <div className={`tittle3 ${styles.cardTech}`}>
              {technologies.map((technologie) => {
                return (
                  <TechCard
                    key={technologie.id}
                    title={technologie.name}
                    img={technologie.img}
                  />
                );
              })}
            </div>
          </ul>
        </div>
      </section>
    );
  };