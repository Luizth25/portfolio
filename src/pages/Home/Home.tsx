import AboutMe from "../../components/AboutMe";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import MyProjects from "../../components/MyProjects";
import {
  heroActions,
  heroBadge,
  heroCard,
  heroContainer,
  heroDescription,
  heroEyebrow,
  heroMetric,
  heroMetrics,
  heroPrimaryLink,
  heroSecondaryLink,
  heroStack,
  heroStackItem,
  homeContainer,
  homeContent,
  homeTitle,
  wavingHand,
} from "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <main className={homeContainer} id="top">
        <section className={heroContainer} aria-labelledby="hero-title">
          <div>
            <span className={heroBadge}>Front-end Developer</span>
            <p className={heroEyebrow}>React, TypeScript, Next.js, Design Systems e IA aplicada</p>
            <h1 className={homeTitle} id="hero-title">
              Olá <span className={wavingHand}>👋</span>, sou Luiz Felipe. Construo interfaces modernas,
              escaláveis e com atenção real aos detalhes.
            </h1>
            <p className={heroDescription}>
              Transformo ideias em produtos digitais responsivos, acessíveis e performáticos,
              combinando arquitetura de componentes, integração com APIs e automações com IA.
            </p>
            <div className={heroActions}>
              <a className={heroPrimaryLink} href="#myProjects">Ver projetos</a>
              <a className={heroSecondaryLink} href="#contact">Entrar em contato</a>
            </div>
          </div>

          <aside className={heroCard} aria-label="Resumo profissional">
            <div className={heroMetrics}>
              <div className={heroMetric}>
                <strong>React</strong>
                <span>Componentização e SPAs</span>
              </div>
              <div className={heroMetric}>
                <strong>Design Systems</strong>
                <span>UI consistente e escalável</span>
              </div>
              <div className={heroMetric}>
                <strong>IA</strong>
                <span>Codex, Kiro, plugins e skills</span>
              </div>
            </div>
            <div className={heroStack}>
              {["TypeScript", "Next.js", "styled-components", "REST APIs", "Web Components"].map((item) => (
                <span className={heroStackItem} key={item}>{item}</span>
              ))}
            </div>
          </aside>
        </section>

        <div className={homeContent}>
          <AboutMe />
          <MyProjects />
          <Contact />
        </div>
      </main>
    </>
  );
}
export default Home;
