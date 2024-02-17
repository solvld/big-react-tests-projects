import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import styles from './styles.module.css'

const ThemeToggler = () => {
  const [onToggleTheme, isDarkTheme] = useTheme();

  return (
    <header className={styles.header}>
      <h2>Change Theme</h2>
      <section className="actionsContainer">
        <button onClick={onToggleTheme}>
          {isDarkTheme ? 'Change to 🌞 mode' : 'Change to 🌚 mode'}
        </button>
      </section>
    </header>
  );
};

export default ThemeToggler;
