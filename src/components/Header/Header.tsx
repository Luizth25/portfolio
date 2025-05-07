import { header, headerTitle, navList, navListItem } from "./header.style.css";

const Header = () => {
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
    </header>
  )
}

export default Header;