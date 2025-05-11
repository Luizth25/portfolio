import AboutMe from "../../components/AboutMe";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import MyProjects from "../../components/MyProjects";
import { homeContainer, homeTitle, wavingHand } from "./Home.css";

const Home = () => {
  return (
    <main className={homeContainer}>
      <Header />
      <h1 className={homeTitle}
      >Olá <span className={wavingHand}>👋</span>, sou o <strong>Luiz Preto</strong>, Desenvolvedor Front-end.</h1>
      <AboutMe />
      <MyProjects />
      <Contact />
    </main>
  );
}
export default Home;