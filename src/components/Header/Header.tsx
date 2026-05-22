import { List, Moon, Sun, X } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { bodyBase, darkTheme, lightTheme } from '../../styles/theme.css';
import {
  buttonTheme,
  header,
  headerTitle,
  menuButton,
  nav,
  navList,
  navListItem,
  navListOpen,
} from "./header.css";

const navItems = [
  { label: "Sobre", target: "about" },
  { label: "Projetos", target: "myProjects" },
  { label: "Contato", target: "contact" },
];

const Header = () => {
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    document.body.className = `${dark ? darkTheme : lightTheme} ${bodyBase}`;
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140;
      const isAtPageEnd =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

      if (isAtPageEnd) {
        setActiveSection("contact");
        return;
      }

      const currentSection = navItems.reduce((current, item) => {
        const section = document.getElementById(item.target);

        if (!section) {
          return current;
        }

        return section.offsetTop <= scrollPosition ? item.target : current;
      }, "");

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={header}>
      <Link
        className={headerTitle}
        to="top"
        smooth={true}
        duration={800}
        offset={-120}
        onClick={closeMenu}
      >
        Luiz Preto
      </Link>
      <nav className={nav} aria-label="Navegação principal">
        <ul className={`${navList} ${menuOpen ? navListOpen : ""}`}>
          {navItems.map((item) => (
            <li className={navListItem} key={item.target}>
              <Link
                to={item.target}
                smooth={true}
                duration={800}
                offset={-88}
                onClick={closeMenu}
                className={activeSection === item.target ? "active" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={buttonTheme}
        type="button"
        aria-label={dark ? "Ativar tema claro" : "Ativar tema escuro"}
        onClick={() => setDark(!dark)}
      >
        {dark ? <Moon size={24} weight="fill" /> : <Sun size={24} weight="fill" />}
      </button>
      <button
        className={menuButton}
        type="button"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={26} /> : <List size={26} />}
      </button>
    </header>
  )
}

export default Header;
