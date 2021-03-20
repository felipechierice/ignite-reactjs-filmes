import { Header } from './Header';
import { MovieCard } from './MovieCard';

import GenreInterface from '../interfaces/Genre.interface';
import MovieInterface from '../interfaces/Movie.interface';

import '../styles/content.scss';

interface ContentProps {
  movies: MovieInterface[],
  selectedGenre: GenreInterface,
}

export function Content({ movies, selectedGenre }: ContentProps) {
  return (
    <div className="container">
      <Header title={selectedGenre.title} />
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
}
