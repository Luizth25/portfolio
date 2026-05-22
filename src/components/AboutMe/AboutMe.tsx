import SectionTitle from "../SectionTitle";
import TechTags from "../TechTags";
import { aboutMeContainer, aboutMeSection, aboutMeText } from "./AboutMe.css";

const AboutMe = () => {
  return (
    <section id="about" className={aboutMeSection}>
      <SectionTitle title="Sobre mim" />
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
      </div>
      <TechTags />
    </section>
  );
}
export default AboutMe;
