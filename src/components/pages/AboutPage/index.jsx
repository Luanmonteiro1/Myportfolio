import styles from "./style.module.css";
import myIcon from "../../../assets/myIcon.png";

export const AboutMe = () => {
  return (
    <section id="sobre" className="container">
      <div className={`${styles.about} animate__animated animate__backInLeft`}>
        <h2 className="tittle2">Sobre mim</h2>
        <div className={styles.boxInfo}>
          <p className="paragraph">
            Olá, me chamo Sávio Luan, tenho 22 anos. Sou Desenvolvedor Web Full Stack, desde
            pequeno tive muito contato com a tecnologia, computador e vídeo game
            sempre foi minha paixão, onde eu ficava horas mexendo, mas somente
            em 2021 mudei de área, da logística para tecnologia, me formei em analise e 
            desenvolvimento de sistemas em 2023 e começei um
            curso de desenvolvimento full stack por um ano na Kenzie academy Brasil,
            onde pude aprender bastante, ter experiências e contato com outros devs
            Através de projetos possuo
            domínio nas tecnologias em HTML5, CSS3,Javascript,Typescript, Git,
            Github; Experiência em soluções baseadas em React JS, Node JS,
            Express, TypeORM, PostgreSQL; Prática no uso de Bibliotecas como
            Axios, React Router, React Hook Form, Zod, Styled Components;
            Familiaridade com boas práticas de desenvolvimento com Hooks como
            UseState, UseEffect, UseContext; Conhecimento em Next JS, SCSS;
          </p>
          <img src={myIcon} alt="" />
        </div>
      </div>
    </section>
  );
};
