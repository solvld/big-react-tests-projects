import React, { useContext } from 'react';
import { MixtapeContext } from './MixtapeContext';
import { Song } from './Song';

export const SongList = () => {
  const { genre, sortOrder, songs } = useContext(MixtapeContext);
  return (
    <>
      {songs
        .filter(song => genre === 'all' || genre === song.genre)
        .sort((a, b) => {
          if (sortOrder === 'ascending') {
            return a.year - b.year;
          } else {
            return b.year - a.year;
          }
        })
        .map(song => (
          <Song {...song} key={song.name} />
        ))}
    </>
  );
};
