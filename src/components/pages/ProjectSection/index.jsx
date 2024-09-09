import React, { useState } from "react";
import { projects } from "../../../data/projects";
import { ProjectCard } from "./ProjectList";
import styles from "./style.module.scss";


export const ProjectSection = () => {

  return (
    <section id="projetos" className="container">
      <div>
        <h2 className="tittle2">Projetos</h2>
        <ul className={styles.listProjects}>
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                image={project.img}
                tittle={project.name}
                description={project.description}
                link={project.link}
                gitLink={project.gitLink}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};
