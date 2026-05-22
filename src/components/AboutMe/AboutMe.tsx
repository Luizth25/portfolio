import SectionTitle from "../SectionTitle";
import TechTags from "../TechTags";
import {
  aboutCard,
  aboutCards,
  aboutMeContainer,
  aboutMeSection,
  aboutMeText,
  aboutSectionIntro,
} from "./AboutMe.css";

const specialties = [
  {
    title: "Interfaces modernas",
    description: "React, TypeScript, Next.js e arquitetura de componentes para produtos responsivos.",
  },
  {
    title: "Design Systems",
    description: "Componentização, padrões visuais e reutilização para escalar interfaces com consistência.",
  },
  {
    title: "IA no workflow",
    description: "Automação com Codex, Kiro, plugins e skills para acelerar design, código e revisão.",
  },
  {
    title: "Qualidade front-end",
    description: "Performance, acessibilidade, integração com APIs REST e modernização de legados.",
  },
];

const AboutMe = () => {
  return (
    <section id="about" className={aboutMeSection}>
      <SectionTitle title="Sobre mim" />
      <p className={aboutSectionIntro}>
        Desenvolvedor front-end focado em construir produtos digitais bem estruturados,
        fáceis de evoluir e prontos para uso real.
      </p>
      <div className={aboutMeContainer}>
        <p className={aboutMeText}>
          Sou Luiz Felipe, desenvolvedor front-end com foco na construção de interfaces
          modernas, escaláveis e de alta qualidade. Trabalho principalmente com React,
          TypeScript, Next.js e arquitetura de componentes, criando aplicações responsivas,
          acessíveis e com forte preocupação em performance e experiência do usuário.
          <br />
          <br />
          Tenho experiência com Design Systems, componentização, integração com APIs REST,
          modernização de aplicações legadas e desenvolvimento de SPAs modernas. Também atuo
          na criação de Web Components e soluções reutilizáveis voltadas para escalabilidade e
          padronização de interfaces.
          <br />
          <br />
          Além do desenvolvimento front-end, tenho interesse em cibersegurança, observabilidade
          e uso de IA aplicada ao desenvolvimento de software. Venho explorando automações com
          assistentes como Codex e Kiro, criação de plugins e skills, geração de componentes e
          integração entre design, código e fluxos de produtividade.
          <br />
          <br />
          Sou movido por aprendizado contínuo, resolução de problemas e evolução técnica
          constante, buscando sempre entregar soluções bem estruturadas, performáticas e com
          atenção aos detalhes.
        </p>
        <div className={aboutCards}>
          {specialties.map((item) => (
            <article className={aboutCard} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
      <TechTags />
    </section>
  );
}
export default AboutMe;
