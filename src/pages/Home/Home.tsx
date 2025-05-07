import AboutMe from "../../components/AboutMe";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import MyProjects from "../../components/MyProjects";
import { vars } from "../../styles/theme.css";

const Home = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "7rem",
        padding: "2rem 0",
        backgroundColor: vars.color.background,
      }}
    >
      <Header />
      <h1
        style={{
          color: vars.color.textPrimary,
          fontSize: "2.6rem",
          fontWeight: 'normal',
        }}
      >Olá, sou o <strong>Luiz Preto</strong>, Desenvolvedor Front-end.</h1>
      <AboutMe />
      <MyProjects />
      <Contact />
    </main>
  );
}
export default Home;