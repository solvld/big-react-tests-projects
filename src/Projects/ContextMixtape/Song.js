import React from 'react';
import styles from './styles.module.css';

export const Song = ({ artist, genre, name, year }) => {
  return (
    <li className={styles.song}>
      <div className={styles.contents}>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.details.left}>
          <h3 className={styles.artist}>{artist}</h3>
        </div>
        <aside className={styles.details.right}>
          <p className={styles.genre}>{genre}</p>
          <p className={styles.year}>{year}</p>
        </aside>
      </div>
    </li>
  );
};
