import { Moon, Sun } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
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
          <li className={navListItem}>Sobre</li>
          <li className={navListItem}>Projetos</li>
          <li className={navListItem}>Contato</li>
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