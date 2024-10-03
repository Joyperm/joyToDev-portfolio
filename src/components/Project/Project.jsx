import React from "react";
import projects from "../../data/Project.json";

import ProjectCard from "./ProjectCard";
import style from './Project.module.css'

export const Project = () => {
  return (
    <section className={style.container} id='projects'>
      <h2 className={style.title}>Project</h2>
      <div className={style.projects}>
        {projects.map((project, id) => {
          return (
            <ProjectCard project={project} key={id}/>
          );
        })}
      </div>
    </section>
  );
};
