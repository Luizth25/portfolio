import { header, headerTitle, navList, navListItem } from "./header.style.css";

const Header = () => {
  return (
    <header className={header}>
      <h1 className={headerTitle}>Luiz Preto</h1>
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