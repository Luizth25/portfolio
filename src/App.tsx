import { Moon, Sun } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import { bodyBase, buttonTheme, darkTheme, lightTheme } from './styles/theme.css';

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.className = `${dark ? darkTheme : lightTheme} ${bodyBase}`;
  }, [dark]);

  return (
    <div style={{ padding: 20}}>
      <button
        onClick={() => setDark(!dark)} className={buttonTheme}>
        {dark ? <Moon color='yellow' size={28}/> : <Sun color='black' size={28}/>}
      </button>
      <Home />
    </div>
  );
}
