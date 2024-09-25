import Vector from "../../../assets/vector.png";
import styles from "./style.module.css";

export const HomePage = () => {
  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/saviomonteiro01/", "_blank");
  };

  const handleDownloadClick = () => {
    window.open("https://tinyurl.com/3w7hxsbj", "_blank");

  };
  return (
    <section className="container">
      <div className={styles.bannerImg}>
        <div className={`${styles.infosMe} animate__animated animate__backInLeft`}>
          <h1 className="tittle1">Olá, Seja bem vindo ao meu portfólio</h1>
          <p className="paragraph">
            Me chamo Sávio Luan e sou <strong>desenvolvedor full stack </strong>
          </p>
          <button onClick={handleLinkedinClick}>Linkedin</button>
          <button onClick={handleDownloadClick}>Donwload cv</button>
        </div>
        <div
          className={`${styles.vector} animate__animated animate__backInRight`}
        >
          <img src={Vector} alt="" />
        </div>
      </div>
    </section>
  );
};
