import SectionTitle from "../SectionTitle";
import { aboutMeContainer, aboutMeText } from "./AboutMe.css";

const AboutMe = () => {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <SectionTitle title="Sobre mim" />
      <div className={aboutMeContainer}>
        <p className={aboutMeText}>
          Sou Luiz Felipe, desenvolvedor front-end com experiência em React, TypeScript, JavaScript, HTML e CSS. Tenho como foco a criação de interfaces modernas, responsivas e com boa usabilidade, aliando performance e design.
          Tenho interesse constante por tecnologia, cibersegurança e design digital, além de hobbies como pixel art e jogos, que contribuem para meu olhar criativo e atenção aos detalhes. Estou sempre em busca de evoluir profissionalmente e entregar soluções de qualidade.
        </p>
      </div>
    </section>
  );
}
export default AboutMe;