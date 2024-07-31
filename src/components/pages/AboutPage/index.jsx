import styles from "./style.module.css"
export const AboutMe = () => {
  return (
    <section id="sobre" className="container">
      <div className={styles.about}>
        <h2 className="tittle2">Sobre mim</h2>
        <p className="paragraph">
          Olá, me chamo Sávio Luan, tenho 21 anos. Sou Desenvolvedor Web,Desde
          pequeno tive muito contato com a tecnologia, computador e vídeo game
          sempre foi minha paixão, onde eu ficava horas mexendo, mas somente em
          2021 mudei de área, da logística para tecnologia, com intuito de
          aprender e me desenvolver cada vez mais.
          Através de projetos possuo
          domínio nas tecnologias em HTML5, CSS3,Javascript,Typescript, Git,
          Github; Experiência em soluções baseadas em React JS, Node JS,
          Express, TypeORM, PostgreSQL; Prática no uso de Bibliotecas como
          Axios, React Router, React Hook Form, Zod, Styled Components;
          Familiaridade com boas práticas de desenvolvimento com Hooks como
          UseState, UseEffect, UseContext; Conhecimento em Next JS, SCSS;
        </p>
      </div>
    </section>
  );
};