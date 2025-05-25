import { mockProjects } from "../../../public/mock/projects";
import SectionTitle from "../SectionTitle";
import { projectCard, projectDescription, projectImage, projectLink, projectsContainer, projectTitle } from "./MyProjects.css";


const MyProjects = () => { 
  return (
    <section id="myProjects" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <SectionTitle title="Meus Projetos" />
      <div className={projectsContainer}>
        {mockProjects.map((project) => (
          <div key={project.id} className={projectCard}>
            <h3 className={projectTitle}>{project.name}</h3>
            <img
              src={project.Image}
              alt={project.name}
              className={projectImage}
            />
            <p className={projectDescription}>{project.description}</p>
            <a
              className={projectLink}
              href={project.link} target="_blank" rel="noopener noreferrer"
            >Visitar Projeto</a>
          </div>
        ))}
      </div>
    </section>
  );
}
export default MyProjects;