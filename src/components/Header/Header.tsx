import { Moon, Sun } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { bodyBase, darkTheme, lightTheme } from '../../styles/theme.css';
import { buttonTheme, header, headerTitle, navList, navListItem } from "./header.css";

const Header = () => {
  const [dark, setDark] = useState(true);
  
    useEffect(() => {
      document.body.className = `${dark ? darkTheme : lightTheme} ${bodyBase}`;
    }, [dark]);

  return (
    <header className={header}>
      <p className={headerTitle}>Luiz Preto</p>
      <nav>
        <ul className={navList}>
          <li className={navListItem}>
            <Link to="about"
              smooth={true} 
              duration={800}
              offset={-64}
              spy={true} 
            >
                Sobre
            </Link>
          </li>
          <li className={navListItem}>
            <Link to="myProjects" 
              smooth={true} 
              duration={800}
              offset={-64}
              spy={true} 
            >
              Projetos
            </Link>
          </li>
          <li className={navListItem}>
            <Link to="contact"
              smooth={true} 
              duration={800}
              offset={-64}
              spy={true} 
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => setDark(!dark)} className={buttonTheme}>
        {dark ? <Moon color='yellow' size={28}/> : <Sun color='black' size={28}/>}
      </button>
    </header>
  )
}

export default Header;