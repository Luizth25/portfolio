import SectionTitle from "../SectionTitle";
import { projectCard, projectDescription, projectLink, projectsContainer, projectTitle } from "./MyProjects.css";

const MyProjects = () => { 
  return (
    <section id="myProjects" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <SectionTitle title="Meus Projetos" />
      <div className={projectsContainer}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className={projectCard}>
            <h3 className={projectTitle}>Nome do Projeto {index + 1}</h3>
            <p className={projectDescription}>Descrição do projeto {index + 1}</p>
            <a
              className={projectLink}
              href="https://www.google.com" target="_blank" rel="noopener noreferrer"
            >Visitar Projeto</a>
          </div>
        ))}
      </div>
    </section>
  );
}
export default MyProjects;