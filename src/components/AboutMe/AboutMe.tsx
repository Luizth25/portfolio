import SectionTitle from "../SectionTitle";
import TechTags from "../TechTags";
import { aboutMeContainer, aboutMeSection, aboutMeText } from "./AboutMe.css";

const AboutMe = () => {
  return (
    <section id="about" className={aboutMeSection}>
      <SectionTitle title="Sobre mim" />
      <div className={aboutMeContainer}>
      <p className={aboutMeText}>
          Sou Luiz Felipe, desenvolvedor front-end com experiência em React, TypeScript,
          JavaScript, HTML e CSS. Tenho como foco a criação de interfaces modernas,
          responsivas e com boa usabilidade, aliando performance e design.
          <br />
          <br />
          Tenho interesse constante por tecnologia, cibersegurança e design digital, além de
          hobbies como pixel art e jogos, que contribuem para meu olhar criativo e atenção aos
          detalhes. Estou sempre em busca de evoluir profissionalmente e entregar soluções de
          qualidade.
        </p>
      </div>
      <TechTags />
    </section>
  );
}
export default AboutMe;