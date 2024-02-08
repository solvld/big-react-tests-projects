import React, { useContext } from 'react';
import { MixtapeContext } from './MixtapeContext';
import styles from './styles.module.css';

export const Controls = () => {
  const { genre, setGenre, sortOrder, setSortOrder } =
    useContext(MixtapeContext);

  const handleChange = ({ target }) => setGenre(target.value);
  return (
    <div className={styles.controls}>
      <select value={genre} onChange={handleChange}>
        <option value="all">All</option>
        <option value="hip hop">Hip-hop</option>
        <option value="rap">Rap</option>
        <option value="rock">Rock</option>
        <option value="pop">Pop</option>
      </select>
      <button
        onClick={() =>
          setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending')
        }
      >
        {sortOrder}
      </button>
    </div>
  );
};
