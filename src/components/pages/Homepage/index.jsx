import Vector from "../../../assets/vector.png";
import styles from "./style.module.css";

export const HomePage = () => {
  return (
    <section className="container">
      <div className={styles.bannerImg}>
        <div className={styles.infosMe}>
          <h1 className="tittle1">Olá, Seja bem vindo ao meu portfólio</h1>
          <p className="paragraph">
            Me chamo Sávio Luan, tenho 21 anos e sou desenvolvedor full stack
          </p>
          <button>Linkedin</button>
          <button>Donwload cv</button>
        </div>
        <div className={styles.vector}>
          <img src={Vector} alt="" />
        </div>
      </div>
    </section>
  );
};
