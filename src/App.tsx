import { useEffect, useState } from 'react';

import GenreInterface from './interfaces/Genre.interface';
import MovieInterface from './interfaces/Movie.interface';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

export function App() {
  const [genres, setGenres] = useState<GenreInterface[]>([]);
  const [movies, setMovies] = useState<MovieInterface[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreInterface>({} as GenreInterface);

  useEffect(() => {
    async function asyncEffect() {
      const genresResponse = await api.get<GenreInterface[]>('genres');
      const firstGenre = genresResponse.data[0];

      setGenres(genresResponse.data);
      setSelectedGenre(firstGenre)
    }
    
    asyncEffect();
  }, []);

  useEffect(() => {
    if (!selectedGenre.id) return;

    async function asyncEffect() {
      const moviesResponde = await api.get<MovieInterface[]>(`movies/?Genre_id=${selectedGenre.id}`);
      setMovies(moviesResponde.data);
    }

    asyncEffect();
  }, [selectedGenre]);

  function handleSelectGenre(genre: GenreInterface) {
    setSelectedGenre(genre);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar genres={genres} selectedGenre={selectedGenre} handleSelectGenre={handleSelectGenre} />
      <Content movies={movies} selectedGenre={selectedGenre} />
    </div>
  )
}